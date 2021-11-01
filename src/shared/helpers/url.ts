const apiPath = '/api';

const normalizePath = (path: string):string => {
  if (!path) {
    return '';
  }
  return path.startsWith('/') ? path : `/${path}`;
};

export const addOriginToPath = (path: string, prefix = ''): string => `${process.env.ORIGIN}${normalizePath(prefix)}${normalizePath(path)}`;

export const addOriginToApiPath = (path: string): string => addOriginToPath(path, apiPath);

