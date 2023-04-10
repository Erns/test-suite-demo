module.exports = {
	root: true,
	extends: ["next", "prettier"],
	rules: {
		"@next/next/no-document-import-in-page": "off",
		"@next/next/no-img-element": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"import/no-anonymous-default-export": "off",
		"react/display-name": "off",
		"turbo/no-undeclared-env-vars": "off",
	},
};
