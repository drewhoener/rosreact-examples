module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended' // Make sure this is always the last element in the array.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'simple-import-sort', 'prettier'],
  settings: {
    react: {
      version: "detect"
    },
    'import/resolver': {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    "prettier/prettier": ["error", {}, { "usePrettierrc": true }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    'react/react-in-jsx-scope': "off",
    'react-refresh/only-export-components': 'warn',
  },
}
