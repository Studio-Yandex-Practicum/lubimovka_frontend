import classNames from 'classnames/bind';

import styles from './filter.module.css';

interface FilterProps {
  className?: string
  variant?: 'horizontal' | 'vertical'
}

const cx = classNames.bind(styles);

export const Filter = (props: React.PropsWithChildren<FilterProps>) => {
  const {
    children,
    className,
    variant = 'horizontal'
  } = props;

  return (
    <div className={cx(variant, className)}>
      {children}
    </div>
  );
};
