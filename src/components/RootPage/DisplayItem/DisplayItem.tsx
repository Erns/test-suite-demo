import Link from "next/link";

import type { OrganizationProps } from "@/types/organization";

interface Props {
	organization: OrganizationProps;
}
const DisplayItem = ({ organization }: Props) => {
	return (
		<div
			role="listitem"
			className="focus-within:ring-primary-500 relative flex items-center space-x-3 rounded-lg border border-gray-300  bg-white shadow-sm focus-within:ring-2 focus-within:ring-offset-2 hover:border-gray-400"
		>
			<div className="flex h-full w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-gray-200 text-sm font-medium text-slate-600">
				{organization.logoUrl ? (
					<div className="bg-opacity-50">
						<img
							className="h-10 w-10 rounded-md"
							src={organization.logoUrl}
							alt={organization.displayName}
						/>
					</div>
				) : (
					organization.displayName[0]
				)}
			</div>

			<div className="min-w-0 flex-1 px-3 py-5">
				<Link
					href={`/${organization.id}/admin/`}
					className="focus:outline-none"
				>
					<span className="absolute inset-0" aria-hidden="true" />
					<p className="truncate text-sm font-medium text-gray-900">
						{organization.displayName}
					</p>
				</Link>
			</div>
		</div>
	);
};

export default DisplayItem;
