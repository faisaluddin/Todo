import styled from "styled-components";

import { colors } from "styles/theme";

export const Info = styled.div`
	display: flex;
	align-items: baseline;
`;

export const Completed = styled.span`
	font-size: xxx-large;
	margin: 0px;
	color: ${colors.primary};
`;

export const Total = styled.span`
	margin: 0px;
	color: ${colors.darkSecondary};
`;

export const StatsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	column-gap: 30px;
	row-gap: 30px;
	margin-bottom: 30px;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${props => props.justify || "start"};
	align-items: ${props => props.justify || "start"};
	min-width: 100px;
	height: 150px;
	background-color: #fff;
	padding: 15px;
	border: 0 solid rgba(0, 0, 0, 0.125);
	border-radius: 10px;
	box-shadow: 1px 1px 7px grey;
`;

export const Flex = styled.div`
	display: flex;
	justify-content: ${props => props.justify || "center"};
	align-items: ${props => props.align || "center"};
	flex-direction: ${props => (props.column ? "column" : "row")};
	border-bottom: ${props =>
		props.underline ? `2px solid ${colors.darkSecondary}` : ""};
	padding: ${props => (props.padding ? "30px 0px" : "")};
	margin: ${props => (props.padding ? "0px 20px" : "")};
	@media only screen and (max-width: 768px) {
		flex-direction: ${props => (props.stack ? "column" : "")};
		width: ${props => (props.stack ? "100%" : "")};
	}
`;

export const TaskName = styled.span`
	color: ${props => (props.completed ? colors.darkSecondary : colors.primary)};
	text-decoration: ${props => (props.completed ? "line-through" : "")};
	margin-left: 5px;
	font-size: 20px;
	font-weight: 500;
`;

export const Checkbox = styled.input`
	height: 20px;
	width: 20px;
	background-color: ${colors.darkSecondary};
`;

export const IconButton = styled.button`
	border: none;
	background-color: white;
	color: #4f4e4a;
	cursor: pointer;
	height: 100%;
	&:focus {
		outline: none;
		box-shadow: none;
	}
`;

export const Filter = styled.input`
	width: 180px;
	height: 40px;
	border: 3px solid ${colors.darkSecondary};
	border-radius: 8px;
	margin: 8px 0px;
	outline: none;
	box-sizing: border-box;
	margin-right: 10px;
	background-color: ${colors.darkSecondary};
	&:focus {
		border: 1px solid ${colors.borderInputFocus};
		box-shadow: 0 0 0 1px ${colors.borderInputFocus};
	}
	@media only screen and (max-width: 768px) {
		width: 90%;
		margin-right: 0px;
	}
`;

export const Button = styled.button`
	height: 40px;
	width: 100px;
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
	@media only screen and (max-width: 768px) {
		width: 90%;
		margin-bottom: 20px;
	}
`;
