const nock = require('nock');
const connect = require('connect');

const { apiBaseUrl } = require('../../../config/vars');

const cypressServerSideStubsMiddleware = () => {
  const middleware = connect();
  const scope = nock(apiBaseUrl);

  const addServerSideStub = (request, response) => {
    const chunks = [];

    request.on('data', (chunk) => {
      chunks.push(chunk);
    });

    request.on('end', () => {
      const {
        method,
        path,
        statusCode,
        body,
      } = JSON.parse(Buffer.concat(chunks).toString());

      scope[method.toLowerCase()](path).reply(statusCode, body);
    });
    response.statusCode = 200;
    response.end();
  };

  const clearServerSideStubs = (request, response) => {
    nock.restore();
    nock.cleanAll();
    nock.activate();
    response.statusCode = 200;
    response.end();
  };

  middleware.use('/__cypress_add_server_side_stub', addServerSideStub);
  middleware.use('/__cypress_clear_server_side_stubs', clearServerSideStubs);

  return middleware;
};

module.exports = {
  cypressServerSideStubsMiddleware,
};
