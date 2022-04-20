import classNames from 'classnames/bind';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import type { FC } from 'react';

import styles from './homepage-headline.module.css';

interface HomepageHeadlineProps {
  // TODO: отрефакторить нейминг
  title: string
  url_title: string
  url: string
  className?: string
}

const cx = classNames.bind(styles);

export const HomepageHeadline: FC<HomepageHeadlineProps> = ({ title, url_title, url, className }) => (
  <section
    className={cx(
      'root',
      className,
    )}
  >
    <div className={cx('container')}>
      <h1 className={cx('title')}>
        {title}
      </h1>
      <div className={cx('wrapper')}>
        <Button
          className={cx('button')}
          upperCase
          size="l"
          border="full"
          icon={(
            <Icon
              glyph="arrow-right"
              width="100%"
              height="100%"
            />
          )}
          iconPosition="right"
          href={url}
          target="_blank"
        >
          {url_title}
        </Button>
      </div>
    </div>
  </section>
);
