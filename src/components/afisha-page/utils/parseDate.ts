export const parseDate = (dateTime: string) => {
  const date = new Date(dateTime);
  const isToday = date.toLocaleDateString() === new Date().toLocaleDateString();
  const isTomorrow = date.toLocaleDateString() === new Date(24 * 3600 * 1000).toLocaleDateString();
  const isYesterday = date.toLocaleDateString() === new Date(- (24 * 3600 * 1000)).toLocaleDateString();

  return {
    isToday,
    isTomorrow,
    isYesterday
  };
};

export type ParseDate = ReturnType<typeof parseDate>;
