import React from "react";

import { List, Datagrid, TextField, NumberField } from "react-admin";

export const CampaignManagerList = (props) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source="id" />
				<TextField source="email" />
				<NumberField source="phone" />
				<TextField source="name" />
			</Datagrid>
		</List>
	);
};
