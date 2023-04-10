import kebabCase from "lodash/kebabCase";
import { faker } from "@faker-js/faker";
import { makeData } from "@/lib/faker/_utils";

//Types
export interface OrganizationProps {
	id: string;
	uniqueName: string;
	displayName: string;
	contactName: string;
	contactEmail?: string | null;
	logoUrl?: string | null;
}

const newOrganization = (): OrganizationProps => {
	const displayName = faker.company.name();

	return {
		id: faker.datatype.uuid(),
		uniqueName: kebabCase(displayName).toLowerCase(),
		displayName,
		contactName: faker.name.fullName(),
		contactEmail: faker.internet.email(),
		logoUrl: faker.internet.avatar(),
	};
};

export const makeOrganizations = (...lens: Array<number>) => {
	return makeData(newOrganization, ...lens);
};
