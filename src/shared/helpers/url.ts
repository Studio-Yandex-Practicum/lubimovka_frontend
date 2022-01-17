import { apiPath } from 'shared/constants/api-path';

const normalizePath = (path: string):string => {
  if (!path) {
    return '';
  }
  return path.startsWith('/') ? path : `/${path}`;
};

export const addBaseUrlToPath = (path: string, prefix = ''): string => `${process.env.baseUrl}${normalizePath(prefix)}${normalizePath(path)}`;

export const addBaseUrlToApiPath = (path: string): string => addBaseUrlToPath(path, apiPath);
