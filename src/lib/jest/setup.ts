import "@testing-library/jest-dom/extend-expect";
import * as globalStorybookConfig from "../../../.storybook/preview";
import { act, cleanup, configure } from "@testing-library/react";
import { server } from "@/lib/msw/server";
import { setProjectAnnotations } from "@storybook/react";
import { toHaveNoViolations } from "jest-axe";
import { triggerMediaResize } from "./utils";
import ResizeObserver from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserver;
expect.extend(toHaveNoViolations);

setProjectAnnotations(globalStorybookConfig as any);

//We have plenty of scrollTo calls scattered about, ensures it won't break anything
window.scrollTo = jest.fn();

let defaultWidth: number;
let defaultHeight: number;

const storeResetFns = new Set<() => void>();

const mockInterceptionObserver = function () {
	return {
		observe: jest.fn(),
		unobserve: jest.fn(),
		disconnect: jest.fn(),
	};
};

// import { TextEncoder, TextDecoder } from "util";
// globalThis.TextEncoder = TextEncoder;
// globalThis.TextDecoder = TextDecoder;

//Setup all the mocked Theme info so the theme wrapper and subsequent styled components can still function
beforeAll(() => {
	window.resizeTo = function resizeTo(width, height) {
		Object.assign(this, {
			innerWidth: width,
			innerHeight: height,
			outerWidth: width,
			outerHeight: height,
		}).dispatchEvent(new this.Event("resize"));
	};

	defaultWidth = window.innerWidth;
	defaultHeight = window.innerHeight;

	configure({ asyncUtilTimeout: 5000 });

	// IntersectionObserver isn't available in test environment
	window.IntersectionObserver = mockInterceptionObserver as any;

	server.listen();
});

beforeEach(async () => {
	server.resetHandlers();
	await act(() => storeResetFns.forEach((resetFn) => resetFn()));
});

afterEach(() => {
	cleanup();
	server.resetHandlers();
	window.resizeTo(defaultWidth, defaultHeight);
	triggerMediaResize();
});

afterAll(() => {
	jest.clearAllMocks();
	jest.resetAllMocks();
	server.close();
});
