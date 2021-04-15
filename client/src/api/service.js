import { headers, baseUrl } from "./config";

async function dispatchResponse(dispatch, response, types) {
	try {
		response.ok
			? response.statusText === "OK"
				? dispatch({ type: types.success, response: await response.json() })
				: dispatch({ type: types.success })
			: dispatch({ type: types.failure, response: await response.json() });
	} catch (e) {
		return dispatch({
			type: types.failure,
			response: { error: "Something went wrong while processing request" },
		});
	}
}

function formatUrl(url, queryParams) {
	if (url.includes("?")) {
		console.warn(
			"Query Parameters should not be specified in URL string. Instead this should happen in the queryParams: object."
		);
	}
	url = url.substr(-1) !== "/" ? url + "/" : url;
	url = new URL(baseUrl() + url);

	for (let i in queryParams)
		if (queryParams[i]) url.searchParams.append(i, queryParams[i]);

	return url;
}

function handleError(dispatch, failure) {
	dispatch({ type: "CONNECTION_REFUSED" });
	dispatch({ type: failure, response: { data: "Something went wrong" } });
}

async function request(method, dispatch, url, types, params) {
	dispatch({ type: types.start });
	url = method === "GET" ? formatUrl(url, params) : formatUrl(url);

	let response = await fetch(url, {
		method: method,
		headers: headers(),
		body: method !== "GET" ? JSON.stringify(params) : undefined,
	}).catch(() => handleError(dispatch, types.failure));

	dispatchResponse(dispatch, response, types);
}

const api = {
	get: (...args) => request("GET", ...args),
	post: (...args) => request("POST", ...args),
	put: (...args) => request("PUT", ...args),
	patch: (...args) => request("PATCH", ...args),
	delete: (...args) => request("DELETE", ...args),
};

export default api;
