export type ParsedQuery = Record<string, string>;

export const stringify = (params: ParsedQuery = {}): string => {
  const keys = Object.keys(params);
  if (!keys.length) return '';
  return `?${keys.map((param) => `${param}=${params[param]}`).join('&')}`;
};
