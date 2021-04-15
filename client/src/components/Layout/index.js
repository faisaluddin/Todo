import React from "react";

import Header from "components/Header";
import { LayoutContainer, MainContent } from "./styles";

const Layout = ({ children }) => {
	return (
		<LayoutContainer>
			<Header />
			<MainContent>{children}</MainContent>
		</LayoutContainer>
	);
};

export default Layout;
