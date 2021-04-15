import React from "react";
import { Redirect } from "react-router-dom";

import Layout from "components/Layout";
import { useAuthContext } from "context/AuthContext";

const ProtectedRoute = ({ children }) => {
	const { isLoggedIn } = useAuthContext();

	if (!isLoggedIn) return <Redirect to="/" />;

	return <Layout>{children}</Layout>;
};

export default ProtectedRoute;
