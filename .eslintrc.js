module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["jest", "prettier"],
  env: { "jest/globals": true },
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
};
