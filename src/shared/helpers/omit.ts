/* eslint-disable @typescript-eslint/no-explicit-any */

type Predicate<T = any> = (entry: T) => boolean;

export const omit = <T extends Record<string, any>>(
  object: T,
  predicate: Predicate
) => (
    Object.fromEntries(
      (Object.entries(object).filter(([, value]) => !predicate(value)))
    )
  );
