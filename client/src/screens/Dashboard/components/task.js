import React from "react";

import { Flex, TaskName, Checkbox, IconButton } from "../styles";
import { deletTask } from "api/actions";
import { useTaskContext } from "context/TaskContext";

const Task = ({
	task,
	setModalOpen,
	setIsUpdate,
	setName,
	setCurrentTask,
	setCompleted,
}) => {
	const { dispatch } = useTaskContext();
	return (
		<Flex justify="space-between" underline={true} padding={true} align="start">
			<Flex justify="start" align="start">
				<Checkbox type="checkbox" checked={task.completed} readOnly={true} />
				<TaskName completed={task.completed}>{task.name}</TaskName>
			</Flex>
			<Flex justify="start">
				<IconButton>
					<i
						className="fa fa-edit fa-2x"
						onClick={() => {
							setModalOpen(true);
							setIsUpdate(true);
							setName(task.name);
							setCurrentTask(task.id);
							setCompleted(task.completed);
						}}
					/>
				</IconButton>
				<IconButton onClick={e => deletTask(dispatch, task.id)}>
					<i className="fa fa-trash fa-2x" />
				</IconButton>
			</Flex>
		</Flex>
	);
};

export default Task;
