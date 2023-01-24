import classNames from 'classnames/bind';

import styles from './schedule-layout.module.css';

const cx = classNames.bind(styles);

enum Area {
  Headline = 'headline'
}

interface ScheduleLayoutSlotProps {
  area: `${Area}`
  className?: string
}

export const ScheduleLayoutSlot: React.FC<ScheduleLayoutSlotProps> = (props) => {
  const {
    area,
    className,
    children,
  } = props;

  return (
    <div className={cx(area, className)}>
      {children}
    </div>
  );
};
