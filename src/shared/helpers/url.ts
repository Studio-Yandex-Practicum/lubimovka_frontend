import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const removeTrailingSlash = (url: string) => url.replace(/\/+$/, '');

const normalizePath = (path: string) => {
  if (!path) {
    return '';
  }
  return path.startsWith('/') ? path : `/${path}`;
};

const baseUrl = removeTrailingSlash(publicRuntimeConfig.baseUrl);
const apiBaseUrl = removeTrailingSlash(publicRuntimeConfig.apiBaseUrl);

export const addBaseUrlToPath = (path: string) => `${baseUrl}${normalizePath(path)}`;
export const addApiBaseUrlToPath = (path: string) => `${apiBaseUrl}${normalizePath(path)}`;
