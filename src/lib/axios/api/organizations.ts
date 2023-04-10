import { getApiClient } from "../_support.scripts";

//Types
import type { OrganizationProps } from "@/types/organization";

const apiClient = getApiClient("/api/organizations/");

export default {
	getAll: (): Promise<Array<OrganizationProps>> => {
		return apiClient
			.get<Array<OrganizationProps>>("")
			.then((response) => response.data);
	},
};
