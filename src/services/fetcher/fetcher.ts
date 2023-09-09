import { addApiBaseUrlToPath } from 'shared/helpers/url';

type ErrorResponse = {
  statusCode: number
  payload: unknown
}

export class HttpRequestError<T extends ErrorResponse = ErrorResponse> extends Error {
  response: T;

  constructor(response: T) {
    super(`The request failed with HTTP status ${response.statusCode}`);
    this.name = 'HttpRequestError';
    this.response = response;
  }
}

export function isHttpRequestError<T extends ErrorResponse>(error: unknown): error is HttpRequestError<T> {
  return error instanceof HttpRequestError;
}

const fetchResource = (httpClient: typeof fetch) => async <T>(path: string, options?: RequestInit) => (
  httpClient(addApiBaseUrlToPath(path), options)
    .then((response) => handleResponse<T>(response))
);

export const fetcher = fetchResource(fetch);

async function handleResponse<T>(response: Response) {
  try {
    const payload = await response.json();
    if (!response.ok) {
      throw new HttpRequestError({ statusCode: response.status, payload });
    }

    return payload as T;
  } catch (err) {
    if (!response.ok) {
      throw new Error('An error occurred while fetching the data.');
    }

    return;
  }
}
