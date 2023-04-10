import mediaQuery from "css-mediaquery";

export const createMatchMedia = (width: number, muiDesktop = false) => {
	return (query: string) => ({
		matches:
			mediaQuery.match(query, { width }) ||
			(muiDesktop && query === "(pointer: fine)"),
		addListener: () => {},
		removeListener: () => {},
	});
};

export const triggerMediaResize = (muiDesktop = false) => {
	(window.matchMedia as any) = createMatchMedia(window.innerWidth, muiDesktop);
};
