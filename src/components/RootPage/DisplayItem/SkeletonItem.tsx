const SkeletonItem = () => {
	return (
		<div
			role="listitem"
			className="relative flex animate-pulse items-center space-x-3 rounded-lg border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 hover:border-gray-400"
		>
			<div className="flex h-full w-16 flex-shrink-0 rounded-l-md bg-gray-300"></div>

			<div className="min-w-0 flex-1 px-3 py-5">
				<div className="h-5 rounded-md bg-gray-500 text-sm font-medium"></div>
				<div className="mt-2 h-3 w-[50%] rounded-md bg-gray-300 text-sm"></div>

				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default SkeletonItem;
