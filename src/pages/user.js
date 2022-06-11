import React from "react";

import { List, Datagrid, TextField, BooleanField, BooleanInput, SimpleForm, Create, TextInput } from "react-admin";

export const UserList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<TextField source="name" />
				<TextField source="created_at" />
				<TextField source="email" />
				<BooleanField source="isApproved" />
				<TextField source="facebook" />
				<TextField source="id" />
				<TextField source="twitter" />
				<TextField source="linkedin" />
				<TextField source="instagram" />
				<TextField source="youtube" />
				<TextField source="website" />
				<TextField source="other" />
				<BooleanField source="isBlocked" />
				<TextField source="phone" />
				<TextField source="uid" />
			</Datagrid>
		</List>
	);
};

export const UserCreate = (props) => {
	return (
		<Create {...props} title="New User">
			<SimpleForm>
				<TextInput source="name" />
				<TextInput source="created_at" />
				<TextInput source="email" />
				<BooleanInput source="isApproved" />
				<TextInput source="facebook" />
				<TextInput source="id" />
				<TextInput source="twitter" />
				<TextInput source="linkedin" />
				<TextInput source="instagram" />
				<TextInput source="youtube" />
				<TextInput source="website" />
				<TextInput source="other" />
				<BooleanInput source="isBlocked" />
				<TextInput source="phone" />
				<TextInput source="uid" />
			</SimpleForm>
		</Create>
	);
};
