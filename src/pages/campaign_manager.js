import React from "react";

import { List, Datagrid, TextField, NumberField, TextInput, Create, SimpleForm, NumberInput } from "react-admin";

export const CampaignManagerList = (props) => {
	return (
		<List {...props}>
			<Datagrid>
				<NumberField source="id" />
				<TextField source="email" />
				<TextField source="phone" />
				<TextField source="name" />
			</Datagrid>
		</List>
	);
};

export const CampaignManagerCreate = (props) => {
	return (
		<Create {...props} title="New Campaign Manager">
			<SimpleForm>
				<NumberInput source="id" disabled />
				<TextInput source="email" />
				<TextInput source="phone" />
				<TextInput source="name" />
			</SimpleForm>
		</Create>
	);
};
