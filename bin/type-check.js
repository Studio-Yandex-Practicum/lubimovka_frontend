const { spawnSync } = require('child_process');
const chalk = require('chalk');

// eslint-disable-next-line no-console
const log = console.log;

const tscCommand = 'tsc --noEmit --incremental false';
const tsErrorRegexp = /^(.+?)\((\d+),(\d+)\): error TS(\d+): (.+)$/g;

const parseErrors = (lines) => lines.split('\n').reduce((errors, line) => {
  const matches = tsErrorRegexp.exec(line.trim());

  if (matches) {
    const [, path, line, column,, message ] = matches;

    errors.push({ path, line, column, message });
  }

  return errors;
}, []);

const groupErrorsByPath = (errors) => {
  return errors.reduce((groups, { path, line, column, message }) => {
    groups[path] = [
      ...groups[path] || [],
      { line, column, message },
    ];

    return groups;
  }, {});
};

const formatErrors = (groupedErrors) => Object.keys(groupedErrors).map((path) => {
  const formattedPath = chalk.cyan(path);
  const formattedErrors = groupedErrors[path].map(({ line, column, message }) => (
    `${chalk.yellowBright(`${(line)}:${column}`.padEnd(7))} ${chalk.yellowBright.bold('Type error')}: ${message}`
  )).join('\n');

  return `\n${formattedPath}\n${formattedErrors}`;
}).join('\n');

const tsc = spawnSync(tscCommand, { shell: true, encoding: 'utf8' });
const errors = parseErrors(tsc.stdout);

if (errors.length === 0) {
  process.exitCode = 0;

  return;
}

process.exitCode = 1;

log(chalk.red('Type check failed.'));
log(formatErrors(groupErrorsByPath(errors)));
