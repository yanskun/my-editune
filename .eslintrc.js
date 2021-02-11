module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:nuxt/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "@nuxtjs/eslint-config-typescript"
  ],
  plugins: ["prettier", "@typescript-eslint"],
  // add your custom rules here
  rules: {
    quotes: ["error", "double"],
    "comma-dangle": ["error", "never"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"]
  }
}
