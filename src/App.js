import React from "react";
import { useEffect, useState } from "react";
import { Admin, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import { CampaignCreate, CampaignList } from "./pages/campaign";
import { CampaignManagerCreate, CampaignManagerList } from "./pages/campaign_manager";
import { CampaignRequestCreate, CampaignRequestList } from "./pages/campaign_request";
import { CampaignStatusCreate, CampaignStatusList } from "./pages/campaign_status";
import { CategoryCreate, CategoryList } from "./pages/category";
import { CodeCreate, CodeList } from "./pages/code";
import { CodesToUserList, CodeToUserCreate } from "./pages/codes_to_user";
import { CouponRequestCreate, CouponRequestList } from "./pages/coupon_request";
import { ReportCreate, ReportsList } from "./pages/reports";
import { UserCreate, UserList } from "./pages/user";
import { UserToCampaignCreate, UserToCampaignRequestList } from "./pages/user_to_campaign_request";
import { UserToCouponCreate, UsertoCouponRequestList } from "./pages/user_to_coupon_request";
const App = () => {
	const [dataProvider, setDataProvider] = useState(null);

	useEffect(() => {
		const buildDataProvider = async () => {
			const dataProviderHasura = await buildHasuraProvider({
				clientOptions: {
					uri: "https://humble-doberman-17.hasura.app/v1/graphql",
				},
			});
			setDataProvider(() => dataProviderHasura);
		};
		buildDataProvider();
	}, []);

	if (!dataProvider) return <p>Loading...</p>;

	return (
		<Admin dataProvider={dataProvider} title="Flymedia Admin">
			<Resource name="campaign" list={CampaignList} create={CampaignCreate} />
			<Resource name="campaign_manager" list={CampaignManagerList} create={CampaignManagerCreate} />
			<Resource name="campaign_request" list={CampaignRequestList} create={CampaignRequestCreate} />
			<Resource name="campaign_status" list={CampaignStatusList} create={CampaignStatusCreate} />
			<Resource name="category" list={CategoryList} create={CategoryCreate} />
			<Resource name="code" list={CodeList} create={CodeCreate} />
			<Resource name="codes_to_user" list={CodesToUserList} create={CodeToUserCreate} />
			<Resource name="coupon_request" list={CouponRequestList} create={CouponRequestCreate} />
			<Resource name="reports" list={ReportsList} create={ReportCreate} />
			<Resource name="user" list={UserList} create={UserCreate} />
			<Resource name="user_to_campaign_request" list={UserToCampaignRequestList} create={UserToCampaignCreate} />
			<Resource name="user_to_coupon_request" list={UsertoCouponRequestList} create={UserToCouponCreate} />
		</Admin>
	);
};
export default App;
