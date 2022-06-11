import React from "react";

import { List, Datagrid, TextField, BooleanField, BooleanInput, SimpleForm, NumberInput, Create, TextInput } from "react-admin";

export const UserToCampaignRequestList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<TextField source="id" />
				<TextField source="user" />
				<TextField source="campaign" />
				<BooleanField source="is_active" />
				<TextField source="request" />
			</Datagrid>
		</List>
	);
};

export const UserToCampaignCreate = (props) => {
	return (
		<Create {...props} title="New User to Campaign Request">
			<SimpleForm>
				<NumberInput source="id" disabled />
				<TextInput source="user" />
				<TextInput source="campaign" />
				<BooleanInput source="is_active" />
				<TextInput source="request" />
			</SimpleForm>
		</Create>
	);
};
