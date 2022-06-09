import React from "react";

import { List, Datagrid, TextField, DateField, NumberField, BooleanField } from "react-admin";

export const CampaignList = (props) => {
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<TextField source="id" />
				<TextField source="name" />
				<TextField source="advertiser_name" />
				<TextField source="promotion" />
				<NumberField source="rating" />
				<NumberField source="category" />
				<NumberField source="manager" />
				<DateField source="created_at" />
				<TextField source="description" />
				<TextField source="coupons" />
				<TextField source="commission" />
				<TextField source="website" />
				<TextField source="dosdonts" />
				<TextField source="dosdonts" />
				<BooleanField source="status" />
				<NumberField source="price" />
				<NumberField source="validation_days" />
				<TextField source="icon" />
				<BooleanField source="is_ended" />
				<BooleanField source="is_active" />
				<DateField source="updated_at" />
			</Datagrid>
		</List>
	);
};
