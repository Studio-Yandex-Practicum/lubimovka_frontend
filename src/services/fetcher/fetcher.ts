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
  let payload;

  try {
    payload = await response.json();
  } catch (error) {
    throw error;
  }

  if (!response.ok) {
    throw new HttpRequestError({ statusCode: response.status, payload });
  }

  return payload as T;
}
