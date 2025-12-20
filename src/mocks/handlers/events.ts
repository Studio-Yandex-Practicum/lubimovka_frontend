import { http, HttpResponse } from 'msw';

import { randomEvents } from 'mocks/data/events';
import { paginate } from 'mocks/helpers/paginate';
import { addApiBaseUrlToPath } from 'shared/helpers/url';

export const eventHandlers = [
  http.get(addApiBaseUrlToPath('/afisha/events/'), ({ request }) => {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') as string, 10) || 20;
    const offset = parseInt(url.searchParams.get('offset') as string, 10) || 0;

    return HttpResponse.json(paginate(randomEvents, limit, offset));
  }),
];
