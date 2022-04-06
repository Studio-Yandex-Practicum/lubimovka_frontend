import ru from 'date-fns/locale/ru';
import { formatWithOptions } from 'date-fns/fp';

export const format = formatWithOptions({ locale: ru });
