import tailwindColors from "tailwindcss/colors";
import type { TWColorKey } from "@lib/tailwind/types";

export const getTWColors = (): Array<keyof TWColorKey> => {
	const colors = Object.keys(tailwindColors);
	return colors.filter((color) => {
		return (
			color !== "black" &&
			color !== "blueGray" &&
			color !== "coolGray" &&
			color !== "current" &&
			color !== "inherit" &&
			color !== "lightBlue" &&
			color !== "transparent" &&
			color !== "trueGray" &&
			color !== "warmGray" &&
			color !== "white"
		);
	}) as Array<keyof TWColorKey>;
};
