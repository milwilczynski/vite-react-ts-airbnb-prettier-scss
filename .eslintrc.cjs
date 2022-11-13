module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "import/prefer-default-export": "off",
    "no-void": ["error", { allowAsStatement: true }],
  },
};
