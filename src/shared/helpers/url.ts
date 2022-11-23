import { baseUrl, apiBaseUrl } from '../../../config/env';

export const removeTrailingSlash = (url: string) => url.replace(/\/+$/, '');

const normalizePath = (path: string) => {
  if (!path) {
    return '';
  }
  return path.startsWith('/') ? path : `/${path}`;
};

export const addBaseUrlToPath = (path: string) => `${removeTrailingSlash(baseUrl)}${normalizePath(path)}`;
export const addApiBaseUrlToPath = (path: string) => `${removeTrailingSlash(apiBaseUrl)}${normalizePath(path)}`;
