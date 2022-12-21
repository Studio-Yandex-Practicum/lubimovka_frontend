import classNames from 'classnames/bind';

import styles from './filter.module.css';

interface FilterActionProps {
  className?: string
}

const cx = classNames.bind(styles);

export const FilterActions: React.FC<FilterActionProps> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <div className={cx('actions', className)}>
      {children}
    </div>
  );
};
