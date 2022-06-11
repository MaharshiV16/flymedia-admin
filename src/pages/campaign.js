import React from "react";

import { List, Datagrid, TextField, BooleanField, BooleanInput, SimpleForm, NumberInput, Create, TextInput, NumberField, DateField, DateInput } from "react-admin";

export const CampaignList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<TextField source="id" />
				<TextField source="name" />
				<TextField source="advertiser_name" />
				<TextField source="promotion" />
				<NumberField source="rating" />
				<NumberField source="category" />
				<NumberField source="manager" />
				<DateField source="created_at" />
				<TextField source="description" />
				<TextField source="coupons" />
				<TextField source="commission" />
				<TextField source="website" />
				<TextField source="dosdonts" />
				<TextField source="dosdonts" />
				<BooleanField source="status" />
				<NumberField source="price" />
				<NumberField source="validation_days" />
				<TextField source="icon" />
				<BooleanField source="is_ended" />
				<BooleanField source="is_active" />
				<DateField source="updated_at" />
			</Datagrid>
		</List>
	);
};

export const CampaignCreate = (props) => {
	return (
		<Create {...props} title="New Campaign">
			<SimpleForm>
				<NumberInput source="id" disabled />
				<TextInput source="name" />
				<TextInput source="advertiser_name" />
				<TextInput source="promotion" />
				<NumberInput source="rating" />
				<NumberInput source="category" />
				<NumberInput source="manager" />
				<DateInput source="created_at" />
				<TextInput source="description" />
				<TextInput source="coupons" />
				<TextInput source="commission" />
				<TextInput source="website" />
				<TextInput source="dosdonts" />
				<TextInput source="dosdonts" />
				<BooleanInput source="status" />
				<NumberInput source="price" />
				<NumberInput source="validation_days" />
				<TextInput source="icon" />
				<BooleanInput source="is_ended" />
				<BooleanInput source="is_active" />
				<DateInput source="updated_at" />
			</SimpleForm>
		</Create>
	);
};
