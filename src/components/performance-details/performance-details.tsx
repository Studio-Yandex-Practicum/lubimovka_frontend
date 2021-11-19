import classNames from 'classnames/bind';

import styles from './performance-details.module.css';

interface IPerformanceDetailsProps {
  duration: string,
  ageLimit: number,
}

const cx = classNames.bind(styles);

export const PerformanceDetails = (props: IPerformanceDetailsProps): JSX.Element => {
  const { duration, ageLimit } = props;

  return (
    <div className={cx('details')}>
      <div>{duration}</div>
      <div className={cx('ageLimit')}>
        {ageLimit}
        <span>+</span>
      </div>
    </div>
  );
};
