module.exports = {
  extends: ['./node_modules/ts-standard/eslintrc.json', 'plugin:astro/recommended'],
  rules: {
    'space-before-function-paren': 'off'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser'
    }
  ],
  parserOptions: {
    extraFileExtensions: ['.astro'],
    project: './tsconfig.json'
  }
}
