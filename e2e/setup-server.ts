
import { createServer } from 'http';
import { parse } from 'url';

import { setupServer } from 'msw/node';
import next from 'next';

import type { Server } from 'http';
import type { SetupServerApi } from 'msw/node';
import type { AddressInfo } from 'net';

let server: Server;
let msw: SetupServerApi;

export const bootstrap = () => new Promise<{
  mockServer: SetupServerApi
  baseUrl: string
}>((resolve) => {
  msw = setupServer();
  server = createServer();

  server.on('listening', () => {
    const port = (server.address() as AddressInfo).port;

    const app = next({
      dev: !process.env.CI,
      port,
    });
    const handle = app.getRequestHandler();

    app.prepare().then(() => {
      server.prependListener('request', (req, res) => {
        const parsedUrl = parse(req.url!, true);

        handle(req, res, parsedUrl);
      });

      resolve({
        mockServer: msw,
        baseUrl: `http://localhost:${port}`,
      });
    });
  });

  msw.listen();
  server.listen();
});

export const teardown = () => {
  msw.close();
  server.close();
};
