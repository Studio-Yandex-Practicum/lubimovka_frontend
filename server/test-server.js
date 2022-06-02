const express = require('express');
const next = require('next');

const { cypressServerSideStubsMiddleware } = require('./middlewares/cypress-server-side-stubs');
const { environment } = require('../config/vars');

const app = next({ dev: environment === 'development' });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(cypressServerSideStubsMiddleware());

    server.all('*', (request, response) => {
      return handle(request, response);
    });

    server.listen(3000, (error) => {
      if (error) {
        throw error;
      }
    });
  });
