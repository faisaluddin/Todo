import styled from "styled-components";

import { colors } from "styles/theme";

export const LayoutContainer = styled.div`
	width: 100%;
	min-height: 100%;
	background-color: ${colors.secondary};
`;

export const MainContent = styled.div`
	padding: 30px 150px;
	height: 100%;
	@media only screen and (max-width: 768px) {
		padding: 30px 0px;
	}
`;
