/* eslint.config.cjs */
// const path = require("path");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");
module.exports = [
  {
    ignores: ["vite.config.ts", "cypress.config.ts"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Equivalent to `env: { browser: true }`
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
      },
      parser: typescriptParser,
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",
      "eol-last": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "require-await": "error",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": [
        "error",
        { builtinGlobals: true, hoist: "all" },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "react-refresh/only-export-components": "off",
    },
  },
];
