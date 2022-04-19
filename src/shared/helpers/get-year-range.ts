const currentYear = new Date().getFullYear();

export const getYearRange = (from: number, to: number = currentYear) => (
  Array.from(Array(to - (from - 1)), (value, index) => to - index)
);
