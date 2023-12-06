import classNames from 'classnames/bind';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import type { FC } from 'react';

import styles from './media-review-card.module.css';

interface MediaReviewCardProps {
  logo?: Url
  text: string
  href?: Url
}

const cx = classNames.bind(styles);

export const MediaReviewCard: FC<MediaReviewCardProps> = (props) => {
  const {
    logo,
    text,
    href,
  } = props;

  return (
    <article className={cx('root')}>
      {logo && (
        <img
          className={cx('logo')}
          src={logo}
          alt=""
        />
      )}
      <p className={cx('text')}>
        {text}
      </p>
      {href && (
        <div className={cx('action')}>
          <Button
            size='s'
            border='bottom-left'
            href={href}
            icon={(
              <Icon
                glyph='arrow-45'
                width="100%"
                height="100%"
              />
            )}
            iconPosition='left'
            className={cx('action')}
            upperCase
          >
            {'Читать полностью'}
          </Button>
        </div>
      )}
    </article>
  );
};
