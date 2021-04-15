import React from "react";
import { PieChart } from "react-minimal-pie-chart";

import { Card } from "../styles";

const Report = ({ data }) => {
	return (
		<Card>
			<PieChart data={data} label={({ dataEntry }) => dataEntry.value} />
		</Card>
	);
};

export default Report;
