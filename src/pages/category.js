import React from "react";

import { List, Datagrid, TextField, SimpleForm, NumberInput, Create, TextInput } from "react-admin";

export const CategoryList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<TextField source="id" />
				<TextField source="name" />
				<TextField source="icon" />
			</Datagrid>
		</List>
	);
};

export const CategoryCreate = (props) => {
	return (
		<Create {...props} title="New Category">
			<SimpleForm>
				<NumberInput source="id" disabled />
				<TextInput source="name" />
				<TextInput source="icon" />
			</SimpleForm>
		</Create>
	);
};
