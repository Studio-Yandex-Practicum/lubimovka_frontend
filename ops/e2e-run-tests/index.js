const cypress = require('cypress');
const express = require('express');
const next = require('next');

const { cypressServerSideStubsMiddleware } = require('./middlewares/cypress-server-side-stubs');
const { environment } = require('../../config/vars');
const { log } = console;

const hostname = 'localhost';
const port = '3002';

const app = next({
  dev: environment === 'development',
  hostname,
  port,
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(cypressServerSideStubsMiddleware());

    server.all('*', (request, response) => {
      return handle(request, response);
    });

    const instance = server.listen(port, async (error) => {
      if (error) {
        throw error;
      }

      log(`Testing server is ready on http://${hostname}:${port}`);

      const result = await cypress.run();

      instance.close(() => {
        if (result.failures) {
          log('Could not execute tests');
          log(result.message);
          process.exit(result.failures);
        }

        process.exit(result.totalFailed);
      });
    });
  });
