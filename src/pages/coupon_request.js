import React from "react";

import { List, Datagrid, TextField, BooleanField, BooleanInput, SimpleForm, NumberInput, Create, TextInput } from "react-admin";

export const CouponRequestList = (props) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source="id" />
				<TextField source="time" />
				<BooleanField source="is_active" />
			</Datagrid>
		</List>
	);
};

export const CouponRequestCreate = (props) => {
	return (
		<Create {...props} title="New Coupon Reuest">
			<SimpleForm>
				<NumberInput source="id" disabled />
				<TextInput source="time" />
				<BooleanInput source="is_active" />
			</SimpleForm>
		</Create>
	);
};
