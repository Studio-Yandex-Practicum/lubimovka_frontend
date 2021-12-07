import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './page-title.module.css';

const cx = classNames.bind(styles);

export const PageTitle: FC<HTMLAttributes<HTMLHeadingElement>> = (props) => {
  const {
    children,
    className,
    ...restProps
  } = props;

  return (
    <h1
      className={cx(
        'title',
        className
      )}
      {...restProps}
    >
      {children}
    </h1>
  );
};
