export function baseUrl() {
	return "http:/127.0.0.1:8000/api/";
}

// export const BASE_URL = "http://192.168.43.17:8000/api/";

export function headers() {
	const obj = {
		"Content-Type": "application/json",
	};
	const token = getToken();
	if (token) obj["Authorization"] = token;

	return obj;
}

export function setUserSession(data) {
	const { token, user } = data;
	localStorage.setItem("token", "Token " + token);
	localStorage.setItem("user", JSON.stringify(user));
}

export function getToken() {
	return localStorage.getItem("token");
}
