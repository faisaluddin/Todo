import styled from "styled-components";

import { colors } from "styles/theme";

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	width: 100%;
	background-color: ${colors.white};
	box-shadow: 1px 3px 6px grey;
`;

export const ProfileContainer = styled.div`
	display: flex;
	width: 100px;
	align-items: center;
	justify-content: space-around;
	margin-left: 100px;
	@media only screen and (max-width: 768px) {
		margin-left: 20px;
	}
`;

export const LogoutButton = styled.button`
	height: 40px;
	width: 50px;
	color: black;
	border: none;
	background-color: ${colors.white};
	margin-right: 100px;
	cursor: pointer;
	@media only screen and (max-width: 768px) {
		margin-right: 20px;
	}
`;

export const ProfilePic = styled.img`
	height: 40px;
	border-radius: 50% !important;
`;
