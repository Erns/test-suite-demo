const path = require("path");
module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-actions",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-links",
	],
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			"@lib": path.resolve(__dirname, "../src/lib"),
			"@server": path.resolve(__dirname, "../server"),
			"@": path.resolve(__dirname, "../src"),
			"@pages": path.resolve(__dirname, "../pages"),
		};
		return config;
	},
	features: {
		emotionAlias: false,
	},
	staticDirs: ["../public"],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: false,
	},
};
