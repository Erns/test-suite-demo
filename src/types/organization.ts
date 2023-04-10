export interface OrganizationProps {
	id: string;
	uniqueName: string;
	displayName: string;
	contactName: string;
	contactEmail?: string | null;
	logoUrl?: string | null;
}
