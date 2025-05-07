import type { Config } from "jest";

const config: Config = {
    preset: "ts-jest",
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
    moduleDirectories: ["node_modules"],
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node",
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
        // "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.module\\.(css|scss)$":
            "<rootDir>/config/jest/__mocks__/styleMock.ts",
        "\\.svg$": "<rootDir>/config/jest/__mocks__/emptyComponent.tsx",
        "\\.(mp4|mp3|webm)$": "<rootDir>/config/jest/__mocks__/fileMock.ts",
    },

    modulePaths: ["<rootDir>/src"],
    rootDir: "../../",
    testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],
    setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.ts"],
};

export default config;
