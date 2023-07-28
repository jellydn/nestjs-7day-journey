module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    'dist',
    '.eslintrc.js',
    '.eslintrc.cjs',
    'vitest.config.ts',
    'vitest.config.e2e.ts',
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['productsway/typescript'],
  root: true,
  env: {
    node: true,
  },
  rules: {
    'new-cap': 'off',
  },
};
