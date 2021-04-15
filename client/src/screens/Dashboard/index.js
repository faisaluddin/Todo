import React, { useEffect, useState } from "react";

import Stats from "./components/stats";
import Latest from "./components/latest";
import Report from "./components/report";
import Task from "./components/task";
import { Card, Title, Input, ButtonBlock } from "styles";
import {
	StatsContainer,
	Flex,
	Filter,
	Button,
	Card as SmallCard,
	Checkbox,
} from "./styles";
import { colors } from "styles/theme";
import { getTasks, addNewTask, editTask, getStats } from "api/actions";
import { useTaskContext } from "context/TaskContext";
import Modal from "components/Modal";
import Spinner from "components/Spinner";

const Dashboard = () => {
	const {
		dispatch,
		tasksUpToDate,
		tasks,
		stats,
		fetching,
		fetchingStats,
	} = useTaskContext();
	const [filter, setFilter] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [name, setName] = useState("");
	const [completed, setCompleted] = useState(false);
	const [isUpdate, setIsUpdate] = useState(false);
	const [currentTask, setCurrentTask] = useState();

	useEffect(() => {
		if (!tasksUpToDate) getStats(dispatch);
	}, [tasksUpToDate, dispatch]);

	useEffect(() => {
		if (!tasksUpToDate) getTasks(dispatch);
	}, [tasksUpToDate, dispatch]);

	useEffect(() => {
		if (!modalOpen) setName("");
	}, [modalOpen]);

	function handleSubmit(e) {
		e.preventDefault();
		isUpdate
			? editTask(dispatch, currentTask, { name, completed })
			: addNewTask(dispatch, { name });
		setModalOpen(false);
		setName("");
	}

	if (fetching || fetchingStats) return <Spinner />;
	return (
		<>
			<Modal open={modalOpen} closeModal={setModalOpen}>
				<form onSubmit={e => handleSubmit(e)}>
					<Title>{isUpdate ? "Update Task" : "+ New Task"}</Title>
					<Input
						placeholder="Task name"
						required
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					{isUpdate && (
						<Flex justify="start">
							<Title>Completed</Title>
							<Checkbox
								type="checkbox"
								checked={completed}
								onChange={e => setCompleted(e.target.checked)}
							/>
						</Flex>
					)}
					<ButtonBlock>{isUpdate ? "Update Task" : "+ New Task"}</ButtonBlock>
				</form>
			</Modal>

			{tasks.length ? (
				<>
					<StatsContainer>
						<Stats
							total={stats.total_tasks}
							completed={stats.tasks_completed}
						/>
						<Latest tasks={stats.latest_tasks} />
						<Report
							data={[
								{
									title: "Completed",
									value: stats.tasks_completed,
									color: colors.primary,
								},
								{
									title: "Total",
									value: stats.total_tasks,
									color: colors.secondary,
								},
							]}
						/>
					</StatsContainer>
					<Flex justify="space-between" stack={true}>
						<Title>Tasks</Title>
						<Flex stack={true}>
							<Filter
								placeholder="Search by Task Name"
								value={filter}
								onChange={e => setFilter(e.target.value)}
							/>
							<Button
								onClick={() => {
									setModalOpen(true);
									setIsUpdate(false);
								}}>
								+ New Task
							</Button>
						</Flex>
					</Flex>
					<Card>
						{tasks.map(
							t =>
								t.name.toLowerCase().includes(filter.toLowerCase()) && (
									<Task
										key={t.id}
										task={t}
										setModalOpen={setModalOpen}
										setIsUpdate={setIsUpdate}
										setName={setName}
										setCurrentTask={setCurrentTask}
										setCompleted={setCompleted}
									/>
								)
						)}
					</Card>
				</>
			) : (
				<SmallCard justify="center">
					<Title>You have no task</Title>
					<Button onClick={() => setModalOpen(true)}>+ New Task</Button>
				</SmallCard>
			)}
		</>
	);
};

export default Dashboard;
