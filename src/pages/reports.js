import React from "react";

import { List, Datagrid, TextField } from "react-admin";

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
