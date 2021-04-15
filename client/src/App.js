import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "components/ProtectedRoute";
import Login from "screens/Login";
import Dashboard from "screens/Dashboard";
import AuthContextProvider from "context/AuthContext";
import TaskContextProvider from "context/TaskContext";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<AuthContextProvider>
						<Route exact path="/(|login)" component={Login} />
						<ProtectedRoute>
							<TaskContextProvider>
								<Route exact path="/home" component={Dashboard} />
							</TaskContextProvider>
						</ProtectedRoute>
					</AuthContextProvider>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
