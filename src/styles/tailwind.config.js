const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
			},
			colors: {
				primary: colors.emerald,
				secondary: colors.yellow,
				neutral: colors.gray,
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
