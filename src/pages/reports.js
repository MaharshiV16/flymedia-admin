import React from "react";

import { List, Datagrid, TextField, SimpleForm, NumberInput, Create, TextInput } from "react-admin";

export const ReportsList = (props) => {
	return (
		<List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="created_at" />
                <TextField source="campaign" />
                <TextField source="user" />
                <TextField source="conversion" />
                <TextField source="revenue" />
                <TextField source="sale_amount" />
                <TextField source="sale_amount_usd" />
                <TextField source="aov_usd" />
            </Datagrid>
		</List>
	);
};


export const ReportCreate = (props) => {
	return (
		<Create {...props} title="New Report">
			<SimpleForm>
				<NumberInput source="id" disabled />
				<TextInput source="created_at" />
				<TextInput source="campaign" />
				<TextInput source="user" />
				<TextInput source="conversion" />
				<TextInput source="revenue" />
				<TextInput source="sale_amount" />
				<TextInput source="sale_amount_usd" />
				<TextInput source="aov_usd" />
			</SimpleForm>
		</Create>
	);
};