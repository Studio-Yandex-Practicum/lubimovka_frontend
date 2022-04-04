export const snakeToCamel = (s: string) => s.replace(/_([a-z])/g, g => g[1].toUpperCase());

export const snakeToCamelObject = <T>(o: T) => {
  if (!o) {
    return o;
  };

  switch (typeof o) {
  case 'string':
  case 'number':
  case 'boolean':
    return o;
  default:
    const res: Record<string, unknown> = {};
    Object.entries(o).forEach(([key, val]) => {
      if (Array.isArray(val)) {
        res[snakeToCamel(key)] = val.map(i => snakeToCamelObject(i));
        return;
      } if (typeof val === 'object') {
        res[snakeToCamel(key)] = snakeToCamelObject(val);
        return;
      };
      res[snakeToCamel(key)] = val;
    });
    return res;
  }
};

