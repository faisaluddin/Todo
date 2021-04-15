import styled from "styled-components";

import { colors } from "./theme";

export const LoginContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: ${colors.secondary};
`;

export const Title = styled.h3`
	text-align: center;
	color: ${colors.darkSecondary};
`;

export const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 100px;
	background-color: #fff;
	padding: 15px;
	border: 0 solid rgba(0, 0, 0, 0.125);
	border-radius: 10px;
	box-shadow: 1px 1px 7px grey;
	@media only screen and (max-width: 768px) {
		width: ${props => (props.shrink ? "80%" : "")};
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 45px;
	border: 0.5px solid ${colors.input};
	border-radius: 8px;
	margin: 8px 0px;
	outline: none;
	padding: 8px;
	box-sizing: border-box;
	background-color: ${colors.input};
	&:focus {
		border: 1px solid ${colors.borderInputFocus};
		box-shadow: 0 0 0 1px ${colors.borderInputFocus};
	}
`;

export const ButtonBlock = styled.button`
	height: 40px;
	width: 100%;
	padding: 1.5em auto;
	margin: 1em auto;
	color: #fff;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	background-color: ${colors.primary};
	&:focus {
		outline: none;
		box-shadow: none;
		background-color: ${colors.buttonHover};
	}
	&:hover {
		background-color: ${colors.buttonHover};
	}
	&:disabled {
		background-color: ${colors.darkSecondary};
	}
`;

export const Spinner = styled.div`
	position: absolute;
	left: 50%;
	margin-left: -50px;
	z-index: 3;
	background-size: 100%;
`;

export const Error = styled.p`
	color: ${colors.danger};
	text-align: center;
`;
