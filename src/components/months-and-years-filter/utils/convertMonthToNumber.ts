export function convertMonthToNumber(v: string) {
  let month:number = new Date().getMonth();
  switch (v) {
  case 'Январь':
    month = 0;
    break;
  case 'Февраль':
    month = 1;
    break;
  case 'Март':
    month = 2;
    break;
  case 'Апрель':
    month = 3;
    break;
  case 'Май':
    month = 4;
    break;
  case 'Июнь':
    month = 5;
    break;
  case 'Июль':
    month = 6;
    break;
  case 'Август':
    month = 7;
    break;
  case 'Сентябрь':
    month = 8;
    break;
  case 'Октябрь':
    month = 9;
    break;
  case 'Ноябрь':
    month = 10;
    break;
  case 'Декабрь':
    month = 11;
    break;
  }
  return month;
}
