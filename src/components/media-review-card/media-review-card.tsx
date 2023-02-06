import classNames from 'classnames/bind';

import { InfoLink } from 'components/ui/info-link';

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
          <InfoLink
            isOutsideLink
            href={href}
            label="Читать полностью"
            icon="arrow-45"
            iconPlace="left"
            size="s"
            textTransform="uppercase"
            border="borderBottomLeft"
            className={cx('action')}
          />
        </div>
      )}
    </article>
  );
};
