import React from "react";

import { List, Datagrid, TextField, BooleanField } from "react-admin";

export const CouponRequestList = (props) => {
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
