import { Children, FC } from 'react';
import classNames from 'classnames/bind';

import { IAnnouncedPlayCardProps } from 'components/ui/announced-play-card';

import styles from './performance-section.module.css';

interface IPerformanceSectionProps {
  title: string,
  children: FC<IAnnouncedPlayCardProps>[],
  className?: string,
}

const cx = classNames.bind(styles);

export const PerformanceSection: FC<IPerformanceSectionProps> = (props) => {
  const {
    title,
    children,
    className,
  } = props;

  const hasOneChild = children.length === 1;

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
