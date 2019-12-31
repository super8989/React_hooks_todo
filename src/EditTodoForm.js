import React from "react";

import TextField from "@material-ui/core/TextField";

import useInputState from "./hooks/useInputState";

function EditTodoForm() {
	const [value, handleChange, reset] = useInputState("");

	return (
		<TextField
			margin='normal'
			value={value}
			onChange={handleChange}
			fullWidth
		/>
	);
}

export default EditTodoForm;
