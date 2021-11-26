module.exports = {
  '*.css': () => 'stylelint **/*.css --cache --allow-empty-input --fix',
  '**/*.(ts|js)?(x)': (filenames) =>
    `next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
}
