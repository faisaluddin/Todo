import React from "react";

import { Title } from "styles";
import { Card, Info, Completed, Total } from "../styles";

const Stats = ({ total, completed }) => {
	return (
		<Card>
			<Title>Tasks Completed</Title>
			<Info>
				<Completed>{completed}</Completed>
				<Total>/{total}</Total>
			</Info>
		</Card>
	);
};

export default Stats;
