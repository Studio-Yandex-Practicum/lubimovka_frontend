module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/jsx-indent': ['error', 2],
    'react/jsx-curly-spacing': ['error', {
      when: 'never',
      attributes: {
        allowMultiline: false
      },
      children: true
    }],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'never',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'multiline'
    }],
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-one-expression-per-line': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-no-useless-fragment': ['error'],
    'react/jsx-newline': ['error', {
      prevent: true
    }],
    'react/self-closing-comp': ['error', {
      component: true,
      html: true
    }],
    'react/no-array-index-key': 'warn',
    'react/jsx-handler-names': 'warn',
  },
};

