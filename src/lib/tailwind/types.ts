import type tailwindColors from "tailwindcss/colors";

export type TWColorKey = Omit<
	typeof tailwindColors,
	| "black"
	| "blueGray"
	| "coolGray"
	| "current"
	| "inherit"
	| "lightBlue"
	| "transparent"
	| "trueGray"
	| "warmGray"
	| "white"
>;
