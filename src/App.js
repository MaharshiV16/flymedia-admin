import React from "react";
import { useEffect, useState } from "react";
import { Admin, Resource } from "react-admin";
import buildHasuraProvider from "ra-data-hasura";
import { CampaignList } from "./pages/campaign";
import { CampaignManagerList } from "./pages/campaign_manager";
import { CampaignRequestList } from "./pages/campaign_request";
import { CampaignStatusList } from "./pages/campaign_status";
import { CategoryList } from "./pages/category";
import { CodeList } from "./pages/code";
import { CodesToUserList } from "./pages/codes_to_user";
import { CouponRequestList } from "./pages/coupon_request";
import { ReportsList } from "./pages/reports";
import { UserList } from "./pages/user";
import { UserToCampaignRequestList } from "./pages/user_to_campaign_request";
import { UsertoCouponRequestList } from "./pages/user_to_coupon_request";
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
			<Resource name="campaign" list={CampaignList} />
			<Resource name="campaign_manager" list={CampaignManagerList} />
			<Resource name="campaign_request" list={CampaignRequestList} />
			<Resource name="campaign_status" list={CampaignStatusList} />
			<Resource name="category" list={CategoryList} />
			<Resource name="code" list={CodeList} />
			<Resource name="codes_to_user" list={CodesToUserList} />
			<Resource name="coupon_request" list={CouponRequestList} />
			<Resource name="reports" list={ReportsList} />
			<Resource name="user" list={UserList} />
			<Resource name="user_to_campaign_request" list={UserToCampaignRequestList} />
			<Resource name="user_to_coupon_request" list={UsertoCouponRequestList} />
		</Admin>
	);
};
export default App;
