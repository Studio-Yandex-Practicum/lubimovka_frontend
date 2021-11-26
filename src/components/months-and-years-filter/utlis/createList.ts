// Формирует список месяцев
import { MONTHS } from '../../../shared/constants/months-and-years';

const currentDate = new Date();

export const createMonthList = (year: number): string[] => {
  let monthList: string[] = MONTHS;

  if(year === new Date().getFullYear()) {
    const currentMonth = currentDate.getMonth();
    monthList = [];
    for(let month = 0; month < currentMonth+1; ++month) {
      monthList.push(MONTHS[month]);
    }
  }
  return monthList;
};

// Формирует список годов
export const createYearList = (): string[] => {
  const yearList = [];

  let currentYear = currentDate.getFullYear();
  for(let i = 0; i < currentDate.getFullYear()-2012; ++i) {
    yearList.push(String(currentYear--));
  }
  return yearList;
};
