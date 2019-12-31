import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import uuid from "uuid/v4";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
	const initialTodos = [
		{ id: 1, task: "Clean fishtank", completed: false },
		{ id: 2, task: "Wash car", completed: true },
		{ id: 3, task: "Grow beard", completed: false }
	];

	const [todos, setTodos] = useState(initialTodos);

	const addTodo = newTodoText => {
		setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
	};

	const removeTodo = todoId => {
		//filter out removed todo
		const updatedTodos = todos.filter(todo => todo.id !== todoId);
		//call setTodos with new todos array
		setTodos(updatedTodos);
	};

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: "100vh",
				backgroundColor: "#fafafa"
			}}
			elevation={0}
		>
			<AppBar color='primary' position='static' style={{ height: "64px" }}>
				<Toolbar>
					<Typography color='inherit'>Todos with Hooks</Typography>
				</Toolbar>
			</AppBar>
			<Grid container justify='center' style={{ marginTop: "1rem" }}>
				<Grid item xs={11} md={8} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList todos={todos} removeTodo={removeTodo} />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;

// - TodoApp
//   - TodoForm
//   - TodoList
//     - TodoItem

// id, task, completed
