module.exports = {
  extends: [
    ...[
      './rules/base',
      './rules/typescript',
      './rules/import',
      './rules/react',
    ].map(require.resolve),
  ],
};
