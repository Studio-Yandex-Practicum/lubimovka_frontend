import getConfig from 'next/config';

const apiPath = '/api';
const { publicRuntimeConfig } = getConfig();

const normalizePath = (path: string):string => {
  if (!path) {
    return '';
  }
  return path.startsWith('/') ? path : `/${path}`;
};

export const addBaseUrlToPath = (path: string, prefix = ''): string => `${publicRuntimeConfig.baseUrl}${normalizePath(prefix)}${normalizePath(path)}`;

export const addBaseUrlToApiPath = (path: string): string => addBaseUrlToPath(path, apiPath);
