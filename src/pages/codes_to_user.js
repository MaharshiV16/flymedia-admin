import React from "react";

import { List, Datagrid, TextField, SimpleForm, NumberInput, Create, TextInput } from "react-admin";

export const CodesToUserList = (props) => {
	return (
		<List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="user" />
                <TextField source="campaign" />
                <TextField source="code" />
            </Datagrid>
		</List>
	);
};

export const CodeToUserCreate = (props) => {
	return (
		<Create {...props} title="New Code to User">
			<SimpleForm>
				<NumberInput source="id" disabled />
				<TextInput source="user" />
				<TextInput source="campaign" />
				<TextInput source="code" />
			</SimpleForm>
		</Create>
	);
};
