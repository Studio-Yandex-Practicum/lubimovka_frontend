type SnakeToCamelCase<S extends string> =
  S extends `${infer T}_${infer U}` ?
  `${T}${Capitalize<SnakeToCamelCase<U>>}` :
  S

export const snakeToCamelCase = <T extends string>(s: T) => s.replace(/_([a-z])/g, g => g[1].toUpperCase()) as SnakeToCamelCase<T>;
