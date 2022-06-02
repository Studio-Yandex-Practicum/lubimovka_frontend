import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000',
    supportFile: 'config/cypress/support/index.ts',
  },
  fixturesFolder: 'tests/e2e/fixtures',
  viewportHeight: 768,
  viewportWidth: 1024,
  video: false,
  screenshotsFolder: 'screenshots'
});
