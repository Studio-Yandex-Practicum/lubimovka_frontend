/* eslint-disable @typescript-eslint/no-var-requires */

import { test, expect } from '@playwright/test';
import { rest } from 'msw';

import { bootstrap, teardown } from './setup-server';

test.describe('smoke', () => {
  let mockServer;
  let baseUrl;

  test.beforeAll(async () => {
    ({ mockServer, baseUrl } = await bootstrap());
  });

  test.afterEach(async () => {
    mockServer.resetHandlers();
  });

  test.afterAll(teardown);

  test('отображается главная', async ({ page }) => {
    mockServer.use(
      rest.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}main/`,
        (req, res, ctx) => res(ctx.status(200), ctx.json(require('./fixtures/main.json'))),
      )
    );

    await page.goto(baseUrl);

    await expect(page).toHaveTitle(/Главная - Любимовка/);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Открыт прием пьес на фестиваль 2021 года');
  });
});
