import { act, render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { axe } from "jest-axe";

import * as stories from "./RootPage.stories";

describe("pages/root", () => {
	it("Should have no accessibility violations", async () => {
		const { SeveralOrganizations } = composeStories(stories);
		const { container } = render(<SeveralOrganizations />);

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
		//endregion

		//region Assert
		expect(getByRole("list")).toBeVisible();
		expect(container.getElementsByTagName("a")).toHaveLength(3);
		expect(getAllByRole("listitem")).toHaveLength(3);
		//endregion
	});

	it("SeveralOrganizations should render 10 organizations (anchor tags), plus add button & navbar home button", async () => {
		const { SeveralOrganizations } = composeStories(stories);

		//region Arrange
		const { container, getByRole, getAllByRole } = render(
			<SeveralOrganizations />
		);
		//endregion

		//region Assert
		expect(getByRole("list")).toBeVisible();
		expect(container.getElementsByTagName("a")).toHaveLength(11);
		expect(getAllByRole("listitem")).toHaveLength(11);
		//endregion
	});
});
