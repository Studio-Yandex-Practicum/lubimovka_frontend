import classNames from 'classnames/bind';
import { forwardRef } from 'react';

import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';

import styles from './homepage-headline.module.css';

interface HomepageHeadlineProps {
  className?: string
  title: string
  url: string
  callToAction: string
}

const cx = classNames.bind(styles);

export const HomepageHeadline = forwardRef<HTMLElement, HomepageHeadlineProps>(({ title, callToAction, url, className }, ref) => (
  <section
    className={cx(
      'root',
      className,
    )}
    ref={ref}
  >
    <div className={cx('container')}>
      <h1 className={cx('title')}>
        {title}
      </h1>
      <div className={cx('action')}>
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
          {callToAction}
        </Button>
      </div>
    </div>
  </section>
));

HomepageHeadline.displayName = 'HomepageHeadline';
