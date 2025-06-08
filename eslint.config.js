import js from "@eslint/js";
import i18next from "eslint-plugin-i18next";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
        ignores: ["build/**"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            js,
        },
        extends: ["js/recommended"],
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    i18next.configs["flat/recommended"],
    {
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                },
            ],
            "i18next/no-literal-string": [
                "error",
                {
                    markupOnly: true,
                },
            ],
            "no-console": "warn",
            "react/display-name": "off",
            eqeqeq: "warn",
        },
    },
]);
