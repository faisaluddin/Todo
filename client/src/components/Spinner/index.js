import React from "react";

import gif from "images/spinner.gif";
import { Spinner as StyledSpinner } from "styles";

const Spinner = () => {
	return (
		<StyledSpinner>
			<img src={gif} alt="loading" />
		</StyledSpinner>
	);
};

export default Spinner;
