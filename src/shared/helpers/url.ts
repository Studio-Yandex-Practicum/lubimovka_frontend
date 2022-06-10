export const removeTrailingSlash = (url: string) => url.replace(/\/+$/, '');

const normalizePath = (path: string) => {
  if (!path) {
    return '';
  }
  return path.startsWith('/') ? path : `/${path}`;
};

const baseUrl = removeTrailingSlash(process.env.NEXT_PUBLIC_BASE_URL || '');
const apiBaseUrl = removeTrailingSlash(process.env.NEXT_PUBLIC_API_BASE_URL || '');

export const addBaseUrlToPath = (path: string) => `${baseUrl}${normalizePath(path)}`;
export const addApiBaseUrlToPath = (path: string) => `${apiBaseUrl}${normalizePath(path)}`;
