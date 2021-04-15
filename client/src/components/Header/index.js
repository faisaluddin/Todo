import React from "react";

import { useAuthContext } from "context/AuthContext";

import {
	NavbarContainer,
	LogoutButton,
	ProfileContainer,
	ProfilePic,
} from "./styles";

const Header = () => {
	const { dispatch } = useAuthContext();

	return (
		<NavbarContainer>
			<ProfileContainer>
				<ProfilePic src={require("images/profile.jpg").default} alt="" />
				<span>Faisal</span>
			</ProfileContainer>
			<LogoutButton onClick={() => dispatch({ type: "LOGOUT" })}>
				Logout
			</LogoutButton>
		</NavbarContainer>
	);
};

export default Header;
