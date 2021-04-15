import React from "react";

import { Title } from "styles";
import { Card } from "../styles";

const Latest = ({ tasks }) => {
	return (
		<Card>
			<Title>Latest Created Tasks</Title>
			<ul>
				{tasks.map(t => (
					<li>{t}</li>
				))}
			</ul>
		</Card>
	);
};

export default Latest;
