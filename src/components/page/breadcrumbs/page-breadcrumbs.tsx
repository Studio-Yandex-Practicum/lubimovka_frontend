import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './page-breadcrumbs.module.css';

interface IBreadcrumbsProps {
  className?: string
}

const cx = classNames.bind(styles);

export const PageBreadcrumbs: FC<IBreadcrumbsProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={cx(
      'breadcrumbs',
      className,
    )}
    >
      {children}
    </div>
  );
};
