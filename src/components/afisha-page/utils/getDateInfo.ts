export const parseDate = (date_time: string) => {
  const date = new Date(date_time);
  const parts = date.toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' }).split(' ');
  const isToday = date.toLocaleDateString() === new Date().toLocaleDateString();
  const isTomorrow = date.toLocaleDateString() === new Date(24 * 3600 * 1000).toLocaleDateString();
  
  return {
    day: Number(parts[0]),
    monthWord: parts[1],
    time: `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`,
    isToday,
    isTomorrow
  };
};

export type ParseDate = ReturnType<typeof parseDate>;
