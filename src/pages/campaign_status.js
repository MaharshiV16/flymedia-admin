import React from "react";

import { List, Datagrid, TextField, BooleanField } from "react-admin";

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
