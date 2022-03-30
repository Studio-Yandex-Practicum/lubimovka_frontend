const express = require('express');
const next = require('next');

const { apiPath } = require('../src/shared/constants/api-path');
const { apiProxy } = require('./middlewares/api-proxy');

const environment = process.env.NODE_ENV || 'development';
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev: environment === 'development' });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/privacy-policy', function (request, response) {
      // TODO: исправить путь к файлу, когда он появится
      response.sendFile(__dirname + '/privacy-policy.pdf');
    });

    server.get('/press-releases/:year/download', function (request, response, next) {
      const targetUrl = `${apiPath}/info/press-releases/${request.params.year}/download/`;

      request.url = targetUrl;
      request.originalUrl = targetUrl;
      next();
    });

    server.use(apiPath, apiProxy);

    server.all('*', (req, res) => handle(req, res));

    server.listen(port, (error) => {
      if (error) {
        throw error;
      }
      // eslint-disable-next-line no-console
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
