export function objectMap<T extends {}, R, K extends keyof T = keyof T>(o: T, iteratee: (k: K, v: T[K]) => R): Record<K, R> {
  const keys = Object.keys(o) as K[];
  return keys.reduce((acc, key) => {
    acc[key] = iteratee(key, o[key]);
    return acc;
  }, {} as Record<K, R>);
}
