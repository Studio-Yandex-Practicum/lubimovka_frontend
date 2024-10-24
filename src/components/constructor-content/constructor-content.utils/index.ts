import format from 'date-fns/format';

type DateTimeString = string;

export const prepareEventDateTime = (dateTime: DateTimeString) => {
  const date = new Date(dateTime);

  return {
    date: format(date, 'd MMMM'),
    time: format(date, 'H:mm'),
  };
};
