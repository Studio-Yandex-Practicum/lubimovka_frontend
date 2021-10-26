// Принимает примерно такой формат 2015-02-24T21:23, возвращает нужный объект для отрисовки даты и времени
export default (string: string) => {
  // Разбиваю строку которая пришла по разделителю
  const dateArr = string.split('-');

  // Достаю данные из массива dateArr, преобразовываю в число если нужно
  const year = Number(dateArr[0]);
  const month = Number(dateArr[1]);
  const day =  parseInt(dateArr[2]);
  const time = dateArr[2].slice(3);

  // Принимает месяц и день для преобразования. 
  // С помощью объекта Intl создаю в объекте свойство monthDay
  const data = new Date(Date.UTC(year, (month - 1), day));
  const monthDay = new Intl.DateTimeFormat('ru-RU', { month: 'long', day: 'numeric' }).format(data);

  return {
    year,
    monthDay,
    'month': monthDay.split(' ')[1],
    'day': monthDay.split(' ')[0],
    time
  };
};
