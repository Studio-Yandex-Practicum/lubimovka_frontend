import { rest } from 'msw';

import { addApiBaseUrlToPath } from 'shared/helpers/url';
import { randomEvents } from 'mocks/data/events';
import { paginate } from 'mocks/helpers/paginate';

import type { AfishaEventListOutput } from '__generated__/api-typings';

export const eventHandlers = [
  rest.get<AfishaEventListOutput>(addApiBaseUrlToPath('/afisha/events/'), (req, res, ctx) => {
    const limit = parseInt(req.url.searchParams.get('limit') as string, 10) || 20;
    const offset = parseInt(req.url.searchParams.get('offset') as string, 10) || 0;

    return res(ctx.json(paginate(randomEvents, limit, offset)));
  }),
];
