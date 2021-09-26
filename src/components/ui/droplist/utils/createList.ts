// Формирует список месяцев
const createMonthList = (data: Date): string[] => {
  const monthsList = [];

  for(let month = 0; month < 12; ++month) {
    data.setMonth(month);
    monthsList.push(data.toLocaleString(undefined, {month: 'long'}));
  }
  return monthsList;
};

// Формирует список годов
const createYearList = (data: Date): number[] => {
  const yearList = [];

  let currentYear = data.getFullYear();
  for(let i = 0; i < 10; ++i) {
    yearList.push(currentYear--);
  }
  return yearList;
};

export const createList = (type: string): string[] | number[] | void => {
  const data: Date = new Date();
  switch (type) {
  case 'months': return createMonthList(data);
  case 'years': return createYearList(data);
  }
};
