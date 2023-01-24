import classNames from 'classnames/bind';
import Link from 'next/link';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import { FC, ReactNode } from 'react';

import styles from './homepage-events-section.module.css';

interface HomepageEventsSectionProps {
  title: ReactNode
  description: string
}

const cx = classNames.bind(styles);

export const HomepageEventsSection: FC<HomepageEventsSectionProps> = (props) => {
  const {
    title,
    description,
    children,
  } = props;

  return (
    <section className={cx('root')}>
      <div className={cx('heading')}>
        <h2 className={cx('title')}>
          {title}
        </h2>
        <Link
          href="/schedule"
          passHref
        >
          <Button
            size="s"
            border="bottom-left"
            upperCase
            icon={(
              <Icon
                glyph="arrow-right"
                width="100%"
                height="100%"
              />
            )}
          >
            Полная афиша
          </Button>
        </Link>
        <p className={cx('description')}>
          {description}
        </p>
      </div>
      {children}
    </section>
  );
};
