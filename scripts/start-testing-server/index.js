const express = require('express');
const next = require('next');

const { cypressServerSideStubsMiddleware } = require('./middlewares/cypress-server-side-stubs');
const { environment, port } = require('../../config/vars');
const { log } = console;

const hostname = 'localhost';

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

    server.listen(port, (error) => {
      if (error) {
        throw error;
      }
      log(`Testing server is ready on http://${hostname}:${port}`);
    });
  });
