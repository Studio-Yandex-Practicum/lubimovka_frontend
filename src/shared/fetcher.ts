import { addBaseUrlToApiPath } from 'shared/helpers/url';

const handleResponse = async (response: Response) => {
  if (response.status === 204) {
    return;
  }

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};

export const fetcher = async <T = unknown>(path: string, options?: RequestInit): Promise<T>  => {
  let fetchImplementation = fetch;

  if (process.env.NEXT_PUBLIC_MOCKS === 'true') {
    fetchImplementation = (await import('mocks/fetch-mock')).default;
  }

  return fetchImplementation(addBaseUrlToApiPath(path), options).then(handleResponse);
};
