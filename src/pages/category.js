import React from "react";

import { List, Datagrid, TextField } from "react-admin";

export const CategoryList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<TextField source="id" />
				<TextField source="name" />
				<TextField source="icon" />
			</Datagrid>
		</List>
	);
};
