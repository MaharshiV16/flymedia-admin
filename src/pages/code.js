import React from "react";

import { List, Datagrid, TextField, BooleanField } from "react-admin";

export const CodeList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<TextField source="id" />
				<TextField source="adset" />
				<TextField source="code" />
				<TextField source="countries" />
				<BooleanField source="is_active" />
			</Datagrid>
		</List>
	);
};
