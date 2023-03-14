import classNames from 'classnames/bind';

import styles from './performance-details.module.css';

interface PerformanceDetailsProps {
  duration?: string
  ageRestriction?: number
  className?: string
}

const cx = classNames.bind(styles);

export const PerformanceDetails = (props: PerformanceDetailsProps): JSX.Element => {
  const {
    duration,
    ageRestriction,
    className
  } = props;

  return (
    <div
      className={cx(
        'details',
        className,
      )}
    >
      {duration && (
        <div>
          {duration}
        </div>
      )}
      {ageRestriction !== null && ageRestriction !== undefined && (
        <div className={cx('ageRestriction')}>
          {ageRestriction}
          <span>
            +
          </span>
        </div>
      )}
    </div>
  );
};
