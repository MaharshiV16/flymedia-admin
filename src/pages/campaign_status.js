import React from "react";

import { List, Datagrid, TextField, BooleanField, Create, SimpleForm, NumberInput, TextInput, BooleanInput } from "react-admin";

export const CampaignStatusList = (props) => {
	return (
		<List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="user" />
                <TextField source="campaign" />
                <BooleanField source="status" />
            </Datagrid>
		</List>
	);
};

export const CampaignStatusCreate = (props) => {
	return (
		<Create {...props} title="New Campaign Status">
			<SimpleForm>
				<NumberInput source="id" disabled />
				<TextInput source="user" />
				<TextInput source="campaign" />
				<BooleanInput source="status" />
			</SimpleForm>
		</Create>
	);
};