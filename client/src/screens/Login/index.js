import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { LoginContainer, Card, Input, ButtonBlock, Title, Error } from "styles";
import { useAuthContext } from "context/AuthContext";
import { login } from "api/actions";

const Login = () => {
	const { dispatch, loggingIn, isLoggedIn, error } = useAuthContext();

	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const onsubmit = e => {
		e.preventDefault();
		login(dispatch, { username, password });
	};

	if (isLoggedIn) {
		return <Redirect to="/home" />;
	}

	return (
		<LoginContainer>
			<Card shrink={true}>
				<form onSubmit={e => onsubmit(e)}>
					<Title>Login </Title>
					<Input
						placeholder="username"
						required
						value={username}
						onChange={e => setUserName(e.target.value)}
					/>
					<Input
						placeholder="apikey"
						required
						value={password}
						type="password"
						onChange={e => setPassword(e.target.value)}
					/>
					{error && <Error>{error}</Error>}
					<ButtonBlock disabled={loggingIn}>
						{loggingIn ? (
							<>
								<i className="fa fa-spinner fa-spin" />
								<span> Signing in...</span>
							</>
						) : (
							<>
								<span>Login</span>
							</>
						)}
					</ButtonBlock>
				</form>
			</Card>
		</LoginContainer>
	);
};

export default Login;
