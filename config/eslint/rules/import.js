module.exports = {
  plugins: ['import'],
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'import/no-default-export': 'warn',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '{.,..}/**/*.css',
            group: 'object',
            position: 'after'
          },
        ],
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'index',
          'type',
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
