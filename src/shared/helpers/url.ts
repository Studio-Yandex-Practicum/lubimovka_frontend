import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const normalizePath = (path: string) => {
  if (!path) {
    return '';
  }
  return path.startsWith('/') ? path : `/${path}`;
};

export const addBaseUrlToPath = (path: string) => `${publicRuntimeConfig.baseUrl}${normalizePath(path)}`;
export const addApiBaseUrlToPath = (path: string) => `${publicRuntimeConfig.apiBaseUrl}${normalizePath(path)}`;
