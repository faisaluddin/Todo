import api from "./service";

export function login(dispatch, creds) {
	api.post(
		dispatch,
		"login/",
		{
			start: "LOGIN",
			success: "LOGIN_SUCCESS",
			failure: "LOGIN_FAIL",
		},
		creds
	);
}

export function getTasks(dispatch) {
	api.get(dispatch, "tasks/", {
		start: "GET_TASKS",
		success: "GET_TASKS_SUCCESS",
		failure: "GET_TASKS_FAILED",
	});
}

export function addNewTask(dispatch, body) {
	api.post(
		dispatch,
		"tasks/",
		{
			start: "ADD_TASK",
			success: "ADD_TASK_SUCCESS",
			failure: "ADD_TASKS_FAILED",
		},
		body
	);
}

export function deletTask(dispatch, id) {
	api.delete(dispatch, `tasks/${id}`, {
		start: "DELETE_TASK",
		success: "DELETE_TASK_SUCCESS",
		failure: "DELETE_TASKS_FAILED",
	});
}

export function editTask(dispatch, id, body) {
	api.patch(
		dispatch,
		`tasks/${id}`,
		{
			start: "EDIT_TASK",
			success: "EDIT_TASK_SUCCESS",
			failure: "EDIT_TASKS_FAILED",
		},
		body
	);
}

export function getStats(dispatch) {
	api.get(dispatch, "stats/", {
		start: "GET_STATS",
		success: "GET_STATS_SUCCESS",
		failure: "GET_STATS_FAILED",
	});
}
