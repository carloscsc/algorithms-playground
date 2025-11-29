import type { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: ["./src/**/*.test.ts", "./src/**/*.test.js"],
	// moduleDirectories: ["ts", "js"],
};

export default config;
