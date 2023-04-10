const range = (len: number) => {
	const arr = [];
	for (let i = 0; i < len; i++) {
		arr.push(i);
	}
	return arr;
};

export const makeData = <T>(newItem: () => T, ...lens: number[]) => {
	const makeDataLevel = (depth = 0): Array<T> => {
		const len = lens[depth]!;
		return range(len).map((_d): T => {
			return {
				...newItem(),
			};
		});
	};

	return makeDataLevel();
};
