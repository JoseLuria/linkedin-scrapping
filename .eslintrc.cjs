module.exports = {
  extends: ['./node_modules/ts-standard/eslintrc.json', 'plugin:astro/recommended'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'space-before-function-paren': 'off'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser'
    }
  ]
}
