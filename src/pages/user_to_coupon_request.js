import React from "react";

import { List, Datagrid, TextField, BooleanField } from "react-admin";

export const UsertoCouponRequestList = (props) => {
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
