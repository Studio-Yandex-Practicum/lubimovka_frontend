import { addApiBaseUrlToPath } from 'shared/helpers/url';

const fetchResource = (httpClient: typeof fetch) => async <T>(resource: string, init?: RequestInit) => (
  httpClient(addApiBaseUrlToPath(resource), init)
    .then(async (response) => {
      if (!response.ok) {
        const error = new Error('An error occurred while fetching the data.');

        Object.assign(error, {
          payload: await response.json(),
          status: response.status,
        });

        throw error;
      }

      return response.json() as T;
    })
);

export const fetcher = fetchResource(fetch);
