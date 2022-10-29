const cypress = require('cypress');
const express = require('express');
const next = require('next');
const { setupServer } = require('msw/node');
const { rest } = require('msw');

const { environment } = require('../config/vars');
const { log } = console;

const hostname = 'localhost';
const port = '3002';

const app = next({
  dev: environment === 'development',
  hostname,
  port,
});
const handle = app.getRequestHandler();
const msw = setupServer();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use('/__use_stub', useStub);
    server.use('/__clear_stubs', clearStubs);

    server.all('*', (request, response) => {
      return handle(request, response);
    });

    msw.listen();

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

function useStub(req, res) {
  const chunks = [];

  req.on('data', (chunk) => {
    chunks.push(chunk);
  });

  req.on('end', () => {
    const {
      url,
      method = 'GET',
      status = 200,
      response,
    } = JSON.parse(Buffer.concat(chunks).toString());

    msw.use(
      rest[method.toLowerCase()](url, (req, res, ctx) => res(ctx.status(status), ctx.json(response)))
    );
  });

  res.status(200).end();
};

function clearStubs(req, res) {
  msw.resetHandlers();

  res.status(200).end();
};
