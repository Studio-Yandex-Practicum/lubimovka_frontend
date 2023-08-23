import classNames from 'classnames/bind';

import styles from './festival-date.module.css';

interface FestivalDateProps {
  day: string
  month: string
  dateTime?: DateTimeIsoString
}

const cx = classNames.bind(styles);

export const FestivalDate: React.VFC<FestivalDateProps> = (props) => {
  const { day, month, dateTime } = props;

  return (
    <time className={cx('root')} dateTime={dateTime}>
      <span className={cx('day')}>
        {day}
      </span>
      {' '}
      <span className={cx('month')}>
        {month}
      </span>
    </time>
  );
};
