import { rest } from "msw";
import { makeOrganizations } from "@/lib/faker/organizations";

const mockOrganizations = makeOrganizations(2);

export const handlers = (
	organizations: typeof mockOrganizations | undefined = mockOrganizations
) => [
	rest.get("/api/organizations/", (_req, res, ctx) => {
		return res(ctx.json(organizations));
	}),
	rest.post("/api/organizations/", (_req, res, ctx) => {
		return res(ctx.json("OK"));
	}),
	rest.get("/api/organizations/:organizationId/", (_req, res, ctx) => {
		return res(ctx.json(organizations[0]));
	}),
	rest.put("/api/organizations/:organizationId/", (_req, res, ctx) => {
		return res(ctx.json("OK"));
	}),
];
