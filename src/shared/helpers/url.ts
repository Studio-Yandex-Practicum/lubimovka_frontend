import { baseUrl, apiBaseUrl } from '../../../config/vars';

const normalizePath = (path: string) => {
  if (!path) {
    return '';
  }
  return path.startsWith('/') ? path : `/${path}`;
};

export const addBaseUrlToPath = (path: string) => `${baseUrl}${normalizePath(path)}`;
export const addApiBaseUrlToPath = (path: string) => `${apiBaseUrl}${normalizePath(path)}`;
