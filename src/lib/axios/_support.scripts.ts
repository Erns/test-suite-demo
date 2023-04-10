import axios from "axios";

type OrganizationBaseUrl = "/api/organizations/";

type BaseUrl = OrganizationBaseUrl;

export type Id = "[id]";

export type OrganizationApiRoute = "" | `${Id}/`;

export type OrganizationApiUrl =
	`${OrganizationBaseUrl}${OrganizationApiRoute}`;

export type ApiUrl = OrganizationApiUrl;

export const getApiClient = (baseURL: BaseUrl) => {
	const apiClient = axios.create({
		baseURL,
	});

	apiClient.interceptors.request.use(
		(config) => {
			config.withCredentials = true;
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
	return apiClient;
};
