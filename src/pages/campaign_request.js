import React from "react";

import { List, Datagrid, TextField, BooleanField, BooleanInput, SimpleForm, NumberInput, Create, TextInput } from "react-admin";

export const CampaignRequestList = (props) => {
	return (
		<List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="time" />
                <BooleanField source="is_active" />
            </Datagrid>
		</List>
	);
};

export const CampaignRequestCreate = (props) => {
	return (
		<Create {...props} title="New Campaign Request">
			<SimpleForm>
				<NumberInput source="id" disabled />
				<TextInput source="time" />
				<BooleanInput source="is_active" />
			</SimpleForm>
		</Create>
	);
};
