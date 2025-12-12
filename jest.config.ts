import type { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["<rootDir>/src/**/*.test.ts", "<rootDir>/src/**/*.test.js"],
	// moduleDirectories: ["ts", "js"],
};

export default config;
