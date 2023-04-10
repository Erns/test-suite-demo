const nextJest = require("next/jest");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

const createJestConfig = nextJest({
	dir: "./",
});

const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/src/lib/jest/setup.ts"],
	moduleDirectories: ["node_modules", "<rootDir>/"],
	modulePaths: ["<rootDir>/src"],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: "<rootDir>",
	}),
	testEnvironment: "jest-environment-jsdom",
};

async function jestConfig() {
	const nextJestConfig = await createJestConfig(customJestConfig)();
	// /node_modules/ is the first pattern
	nextJestConfig.testMatch = ["**/*.test.tsx", "**/*.test.ts"];
	nextJestConfig.coveragePathIgnorePatterns = ["^.*\\.stories\\.[jt]sx?$"];
	return nextJestConfig;
}

module.exports = jestConfig;
