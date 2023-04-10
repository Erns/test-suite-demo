import { act, render, waitFor } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { axe } from "jest-axe";

import * as stories from "./RootPage.stories";

describe("pages/root", () => {
	it("Should have no accessibility violations", async () => {
		const { SeveralOrganizations } = composeStories(stories);
		const { container } = render(<SeveralOrganizations />);
		await waitFor(() =>
			expect(container.getElementsByTagName("a").length).toBeGreaterThan(0)
		);

		await act(async () => {
			const results = await axe(container);
			expect(results).toHaveNoViolations();
		});
	});

	it("Loading should have no accessibility violations", async () => {
		const { Default } = composeStories(stories);
		const { container } = render(<Default loading />);

		await act(async () => {
			const results = await axe(container);
			expect(results).toHaveNoViolations();
		});
	});

	it("Default should render 2 organizations (anchor tags), plus add button & navbar home button", async () => {
		const { Default } = composeStories(stories);
		//region Arrange
		const { container, getByRole, getAllByRole } = render(<Default />);
		await waitFor(() =>
			expect(container.getElementsByTagName("a").length).toBeGreaterThan(0)
		);
		//endregion

		//region Assert
		// @ts-ignore
		expect(getByRole("list")).toBeVisible();
		expect(container.getElementsByTagName("a")).toHaveLength(2);
		expect(getAllByRole("listitem")).toHaveLength(2);
		//endregion
	});

	it("SeveralOrganizations should render 10 organizations (anchor tags), plus add button & navbar home button", async () => {
		const { SeveralOrganizations } = composeStories(stories);

		//region Arrange
		const { container, getByRole, getAllByRole } = render(
			<SeveralOrganizations />
		);
		await waitFor(() =>
			expect(container.getElementsByTagName("a").length).toBeGreaterThan(0)
		);
		//endregion

		//region Assert
		// @ts-ignore
		expect(getByRole("list")).toBeVisible();
		expect(container.getElementsByTagName("a")).toHaveLength(10);
		expect(getAllByRole("listitem")).toHaveLength(10);
		//endregion
	});
});
