import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './page-breadcrumbs.module.css';

interface IBreadcrumbsProps {
  className?: string,
}

const cx = classNames.bind(styles);

export const PageBreadcrumbs: FC<IBreadcrumbsProps> = (props) => {
  const { children, className } = props;

  return (
    <div className={cx(
      'breadcrumbs',
      className,
    )}>
      {children}
    </div>
  );
};
