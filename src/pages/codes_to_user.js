import React from "react";

import { List, Datagrid, TextField } from "react-admin";

export const CodesToUserList = (props) => {
	return (
		<List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="user" />
                <TextField source="campaign" />
                <TextField source="code" />
            </Datagrid>
		</List>
	);
};
