module.exports = {
  root: true,
  extends: ['@srmcguirt/eslint-config'],
  plugins: [],
  parserOptions: {
    project: ['tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {},
  ignorePatterns: ['dist/**'],
}
