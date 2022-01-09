import { addBaseUrlToApiPath } from 'shared/helpers/url';

export const fetcher = async <T = unknown>(path: string, options?: RequestInit): Promise<T>  => {
  let fetchImplementation = fetch;

  if (process.env.NEXT_PUBLIC_MOCKS === 'true') {
    fetchImplementation = (await import('mocks/fetch-mock')).default;
  }

  const response = await fetchImplementation(addBaseUrlToApiPath(path), options);

  if (response.ok) {
    const data = await response.json();

    return data;
  }

  throw new Error('Invalid response');
};
