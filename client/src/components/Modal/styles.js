import styled from "styled-components";

export const StyledModal = styled.div`
	display: ${props => (props.open ? "block" : "none")};
	position: fixed;
	z-index: 1;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
	background-color: #fefefe;
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	width: 30%;
	@media only screen and (max-width: 768px) {
		width: 80%;
	}
`;

export const Close = styled.span`
	color: #aaaaaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
	margin-left: auto;
	&:hover {
		color: #000;
		text-decoration: none;
		cursor: pointer;
	}
`;
