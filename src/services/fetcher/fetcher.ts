import { addApiBaseUrlToPath } from 'shared/helpers/url';

const fetchResource = (httpClient: typeof fetch) => <T = unknown>(path: string, options?: RequestInit) => {
  return httpClient(addApiBaseUrlToPath(path), options).then((response) => handleResponse<T>(response));
};

export const fetcher = fetchResource(getHttpClientByEnvironment());

async function handleResponse<T>(response: Response) {
  let data;

  try {
    data = await response.json() as T;
  } catch {
    data = undefined as unknown as T;
  }

  if (!response.ok) {
    throw {
      status: response.status,
      data,
    };
  }

  return data;
};

function getHttpClientByEnvironment() {
  let httpClient = fetch;

  if (process.env.NEXT_PUBLIC_MOCKS === 'true') {
    httpClient = require('mocks/fetch-mock').default;
  }

  return httpClient;
};
