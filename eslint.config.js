import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default defineConfig([
    globalIgnores([
        "dist",
        "node_modules/**",
        ".husky/**",
        "vite.config.ts.timestamp-*",
    ]),
    {
        files: ["**/*.{ts,tsx,jsx,js}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs["recommended-latest"],
            reactRefresh.configs.vite,
            jsxA11y.flatConfigs.recommended,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "warn",

            // "jsx-a11y/click-events-have-key-events": "off",
            // "jsx-a11y/interactive-supports-focus": "error",
            // "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
        },
    },
]);
