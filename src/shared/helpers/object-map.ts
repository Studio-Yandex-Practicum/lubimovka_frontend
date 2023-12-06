export function objectMap<T extends object, K extends keyof T, R>(o: T, iteratee: (k: K, v: T[K]) => R): Record<K, R> {
  return Object.fromEntries((<Array<[K, T[K]]>>Object.entries(o)).map(([k, v]) => [k, iteratee(k, v)])) as Record<K, R>;
}
