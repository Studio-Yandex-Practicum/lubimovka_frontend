import classNames from 'classnames/bind';

import styles from './press-release-layout.module.css';

const cx = classNames.bind(styles);

enum Area {
  Actions = 'actions',
  Content = 'content',
  Image = 'image',
  Title = 'title',
}

interface PressReleaseLayoutSlotProps {
  area: `${Area}`
  className?: string
}

export const PressReleaseLayoutSlot: React.FC<PressReleaseLayoutSlotProps> = (props) => {
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
