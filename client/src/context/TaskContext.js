import React, { createContext, useReducer, useContext } from "react";

const TaskContext = createContext();

export function useTaskContext() {
	return useContext(TaskContext);
}

const initialState = {
	tasks: [],
	tasksUpToDate: false,
	fetchingTasks: false,
	stats: {},
};

function reducer(state, action) {
	switch (action.type) {
		case "GET_TASKS":
			return {
				...state,
				fetching: true,
			};
		case "GET_TASKS_SUCCESS":
			return {
				...state,
				tasks: action.response,
				fetching: false,
				tasksUpToDate: true,
			};
		case "GET_TASKS_FAILED":
			return {
				...state,
				fetching: false,
			};
		case "ADD_TASK":
			return {
				...state,
			};
		case "ADD_TASK_SUCCESS":
			return {
				...state,
				tasksUpToDate: false,
			};
		case "ADD_TASK_FAILED":
			return {
				...state,
			};
		case "DELETE_TASK_SUCCESS":
		case "EDIT_TASK_SUCCESS":
			return {
				...state,
				tasksUpToDate: false,
			};
		case "GET_STATS":
			return {
				...state,
				fetchingStats: true,
			};
		case "GET_STATS_SUCCESS":
			return {
				...state,
				stats: action.response,
				fetchingStats: false,
			};
		case "GET_STATS_FAILED":
			return {
				...state,
				fetchingStats: false,
			};
		default:
			return state;
	}
}

const TaskContextProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<TaskContext.Provider value={{ ...state, dispatch: dispatch }}>
			{props.children}
		</TaskContext.Provider>
	);
};

export default TaskContextProvider;
