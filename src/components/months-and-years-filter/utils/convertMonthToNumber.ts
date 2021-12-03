export function convertMonthToNumber(v: string) {
  let month:number = new Date().getMonth() + 1;
  switch (v) {
  case 'Январь':
    month = 1;
    break;
  case 'Февраль':
    month = 2;
    break;
  case 'Март':
    month = 3;
    break;
  case 'Апрель':
    month = 4;
    break;
  case 'Май':
    month = 5;
    break;
  case 'Июнь':
    month = 6;
    break;
  case 'Июль':
    month = 7;
    break;
  case 'Август':
    month = 8;
    break;
  case 'Сентябрь':
    month = 9;
    break;
  case 'Октябрь':
    month = 10;
    break;
  case 'Ноябрь':
    month = 11;
    break;
  case 'Декабрь':
    month = 12;
    break;
  }
  return month;
}
