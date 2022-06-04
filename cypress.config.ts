import { defineConfig } from 'cypress';
import { baseUrl } from './config/vars';

export default defineConfig({
  e2e: {
    specPattern: 'tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: baseUrl,
    supportFile: 'config/cypress/support/index.ts',
  },
  fixturesFolder: 'tests/e2e/fixtures',
  viewportHeight: 768,
  viewportWidth: 1024,
  video: false,
  screenshotsFolder: 'screenshots'
});
