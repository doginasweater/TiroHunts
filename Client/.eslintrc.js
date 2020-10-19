module.exports = {
  parser: "@typescript-eslint/parser",
    parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "jsx-a11y",
    "react"
  ],
  extends: [
    "eslint:reccommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ]
}