import React from "react";

import { List, Datagrid, TextField, BooleanField } from "react-admin";

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
