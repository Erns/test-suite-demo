import RootPage from "./RootPage";
import { handlers as organizationsHandler } from "@/lib/msw/handlers/organizations";
import { makeOrganizations } from "@/lib/faker/organizations";

import type { StoryFn } from "@storybook/react";

const coupleOrganizations = makeOrganizations(2);
const severalOrganizations = makeOrganizations(10);

const Template: StoryFn<typeof RootPage> = (props) => {
	return <RootPage {...props} />;
};

export const Default = Template.bind({});
Default.parameters = {
	msw: {
		handlers: organizationsHandler(coupleOrganizations),
	},
};

export const SeveralOrganizations = Template.bind({});
SeveralOrganizations.parameters = {
	msw: {
		handlers: organizationsHandler(severalOrganizations),
	},
};

export const Loading = Template.bind({});
Loading.args = {
	loading: true,
};

export default {
	title: "pages/root",
	component: RootPage,
};
