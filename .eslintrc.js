export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/typescript/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  root: true,
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "sort-imports": "error",
    "no-irregular-whitespace": "off",
  },
  sourceType: "module",
};
