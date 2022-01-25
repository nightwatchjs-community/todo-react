module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'eslint:recommended'
    ],
    parserOptions: {
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }
  