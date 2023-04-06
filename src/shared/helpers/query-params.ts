export const safelyGetQueryParamAsString = <R = null>(param?: string | string[], fallback: R = null as R) => {
  if (typeof param === 'string') {
    return param;
  } else if (Array.isArray(param)) {
    return param[param.length - 1];
  }

  return fallback;
};
