import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
