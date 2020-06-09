module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parser: 'babel-eslint',
  extends: [
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
  }
}
