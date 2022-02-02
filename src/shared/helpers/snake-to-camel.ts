export const snakeToCamel = (s: string) => s.replace(/_([a-z])/g, g => g[1].toUpperCase());
