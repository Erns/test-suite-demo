import { screens } from "tailwindcss/defaultTheme";

import { initialize, mswDecorator } from "msw-storybook-addon";
import "@/styles/sass/global.scss";

initialize({
	onUnhandledRequest: "bypass",
});

const customViewports = {
	xs: {
		name: "xs",
		styles: {
			width: "360px",
			height: "600px",
		},
	},
	sm: {
		name: "sm",
		styles: {
			width: screens.sm,
			height: "801px",
		},
	},
	md: {
		name: "md",
		styles: {
			width: screens.md,
			height: "700px",
		},
	},
	lg: {
		name: "lg",
		styles: {
			width: screens.lg,
			height: "800px",
		},
	},
	xl: {
		name: "xl",
		styles: {
			width: screens.xl,
			height: "900px",
		},
	},
	["2xl"]: {
		name: "2xl",
		styles: {
			width: screens["2xl"],
			height: "900px",
		},
	},
};

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			// color: /(background|color)$/i,
			date: /Date$/,
		},
		expanded: true,
	},
	nextjs: {
		appDirectory: true,
		navigation: {
			pathname: "/",
		},
	},
	viewport: {
		viewports: {
			...customViewports,
		},
	},
};

export const decorators = [
	(Story: any, context: any) => {
		return (
			<div className="h-full min-h-screen bg-gray-300 p-4">
				<Story {...context} />
			</div>
		);
	},
	mswDecorator,
];
