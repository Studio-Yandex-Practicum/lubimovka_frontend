const { generate } = require('openapi-typescript-codegen');
const fs = require('fs');

const openApiSchemeUrl = 'https://stage.dev.lubimovka.ru/api/v1/schema';
const outputDir = 'src/__generated__/api-typings';

fs.rmSync(outputDir, { recursive: true, force: true });

generate({
  input: openApiSchemeUrl,
  output: outputDir,
  useUnionTypes: true,
  exportCore: false,
  exportServices: false,
});
