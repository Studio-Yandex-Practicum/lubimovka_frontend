const { generate } = require('openapi-typescript-codegen');
const fs = require('fs');

const openApiSchemeUrl = 'https://stage.dev.lubimovka.ru/api/v1/schema';
const typingsDir = 'src/api-typings';

fs.rmSync(typingsDir, { recursive: true, force: true });

generate({
  input: openApiSchemeUrl,
  output: typingsDir,
  useUnionTypes: true,
  exportCore: false,
  exportServices: false,
});
