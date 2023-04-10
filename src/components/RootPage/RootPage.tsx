"use client";

import DisplayItem from "./DisplayItem";
import SkeletonItem from "./DisplayItem/SkeletonItem";
import organizationApi from "@/lib/axios/api/organizations";
import { useEffect, useState } from "react";

import type { OrganizationProps } from "@/types/organization";

interface Props {
	loading?: boolean;
}

const RootPage = ({ loading }: Props) => {
	const [isLoading, setIsLoading] = useState(!!loading);
	const [organizations, setOrganizations] = useState<Array<OrganizationProps>>(
		[]
	);

	useEffect(() => {
		const getInfo = async () => {
			setIsLoading(true);
			try {
				const data = await organizationApi.getAll();
				setOrganizations(data);
			} catch (error) {
				console.error(error);
			}
			setIsLoading(false);
		};

		if (!loading) {
			getInfo();
		}
	}, [loading]);

	return (
		<div>
			<div className="my-2 flex flex-row justify-between p-4">
				<h1 className="m-0 tracking-tight text-slate-800">
					Select your organization
				</h1>

				<div></div>
			</div>

			<div
				role="list"
				className="card not-prose grid grid-cols-1 gap-4 p-6 sm:grid-cols-3"
			>
				{!isLoading ? (
					<>
						{organizations?.map((organization) => (
							<DisplayItem key={organization.id} organization={organization} />
						))}
					</>
				) : (
					<>
						<SkeletonItem />
						<SkeletonItem />
						<SkeletonItem />
					</>
				)}
			</div>
		</div>
	);
};

export default RootPage;
