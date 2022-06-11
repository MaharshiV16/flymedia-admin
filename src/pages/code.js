import React from "react";

import { List, Datagrid, TextField, BooleanField, BooleanInput, SimpleForm, NumberInput, Create, TextInput } from "react-admin";

export const CodeList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<TextField source="id" />
				<TextField source="adset" />
				<TextField source="code" />
				<TextField source="countries" />
				<BooleanField source="is_active" />
			</Datagrid>
		</List>
	);
};

export const CodeCreate = (props) => {
	return (
		<Create {...props} title="New Code">
			<SimpleForm>
				<NumberInput source="id" disabled />
				<TextInput source="adset" />
				<TextInput source="code" />
				<TextInput multiline="true" source="countries" />
				<BooleanInput source="is_active" />
			</SimpleForm>
		</Create>
	);
};
