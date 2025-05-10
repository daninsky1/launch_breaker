import js from "@eslint/js";
import globals from "globals";
import {defineConfig} from "eslint/config";


export default defineConfig([
    {files: ["**/*.{js,mjs,cjs}"], plugins: {js}, extends: ["js/recommended"]},
    {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
    {files: ["**/*.{js,mjs,cjs}"], languageOptions: {globals: globals.browser}},
    {
        rules: {
            semi: ["error", "always"],
            "no-var": "error",
            "guard-for-in": "error",
            "object-curly-spacing": "always",
            "max-lines": ["error", {"max": 120}],
        },
    },
]);