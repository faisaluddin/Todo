import React from "react";
import { PieChart } from "react-minimal-pie-chart";

import { Card } from "../styles";

const Report = ({ data }) => {
	return (
		<Card>
			<PieChart data={data} radius={PieChart.defaultProps.radius - 7} />
		</Card>
	);
};

export default Report;
