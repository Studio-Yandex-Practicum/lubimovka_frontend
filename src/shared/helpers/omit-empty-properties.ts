type AllowedValue = undefined | null | string | number | boolean | (string | number | boolean)[];

export const omitEmptyProperties = (o: Record<string, AllowedValue>) => (
  Object.entries(o).reduce<Record<string, NonNullable<AllowedValue>>>((a, [k, v]) => (v ? (a[k] = v, a) : a), {})
);
