module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    soruceType: 'module',
  },
  env: {
    jest: true,
    es6: true,
  },
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import'],
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
};
