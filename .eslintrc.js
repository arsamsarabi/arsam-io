module.exports = {
  extends: '@alineaos/eslint-config-alinea',
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'react/display-name': 'off',
  },
}
