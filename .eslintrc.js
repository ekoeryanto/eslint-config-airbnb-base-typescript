module.exports = {
  extends: ['./index.js', 'prettier', 'prettier/@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
