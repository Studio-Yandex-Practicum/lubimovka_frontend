import { addApiBaseUrlToPath } from 'shared/helpers/url';

export class HttpRequestError extends Error {
  constructor (public statusCode: number, public data: unknown) {
    super(`The request failed with HTTP status ${statusCode}`);
    this.name = 'HttpRequestError';
    this.statusCode = statusCode;
    this.data = data;
  }
}

const fetchResource = (httpClient: typeof fetch) => async <T>(path: string, options?: RequestInit) => (
  httpClient(addApiBaseUrlToPath(path), options)
    .then((response) => handleResponse<T>(response))
);

export const fetcher = fetchResource(getHttpClientByEnvironment());

async function handleResponse<T>(response: Response) {
  let data;

  try {
    data = await response.json();
  } catch {}

  if (!response.ok) {
    throw new HttpRequestError(response.status, data);
  }

  return data as T;
};

function getHttpClientByEnvironment() {
  let httpClient = fetch;

  if (process.env.NEXT_PUBLIC_MOCKS === 'true') {
    httpClient = require('mocks/fetch-mock').default;
  }

  return httpClient;
};
