import React, { createContext, useReducer, useContext } from "react";
import { setUserSession, getToken } from "api/config";

const AuthContext = createContext();

export function useAuthContext() {
	return useContext(AuthContext);
}

const initialState = {
	isLoggedIn: false,
	ready: false,
	error: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				loggingIn: true,
			};
		case "LOGIN_SUCCESS":
			setUserSession(action.response);
			return {
				...state,
				isLoggedIn: true,
				ready: true,
				error: "",
				loggingIn: false,
				user: action.response.user,
			};
		case "LOGIN_FAIL":
			return {
				...state,
				ready: true,
				error: "Invalid credentials",
				loggingIn: false,
			};
		case "LOGOUT":
			window.localStorage.clear();
			return {
				...state,
				isLoggedIn: false,
				ready: true,
				error: "",
			};

		default:
			return state;
	}
}

const AuthContextProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const token = getToken(); // When hard refreshed
	if (token) initialState.isLoggedIn = true;

	return (
		<AuthContext.Provider value={{ ...state, dispatch: dispatch }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
