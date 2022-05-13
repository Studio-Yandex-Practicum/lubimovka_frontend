import { Children } from 'react';
import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './performance-section.module.css';

interface IPerformanceSectionProps {
  title: string,
  className?: string,
}

const cx = classNames.bind(styles);

export const PerformanceSection: FC<IPerformanceSectionProps> = (props) => {
  const {
    title,
    children,
    className,
  } = props;

  const hasOneChild = Children.count(children) === 1;

  return (
    <section
      className={cx(
        className,
        { hasOneChild },
      )}
    >
      <h2 className={cx('title')}>
        {title}
      </h2>
      {hasOneChild ? children : (
        <ul className={cx('list')}>
          {Children.map(children, child => (
            <li className={cx('item')}>
              {child}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
