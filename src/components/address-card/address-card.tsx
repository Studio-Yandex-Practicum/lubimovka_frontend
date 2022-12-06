import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';
import { Button } from 'components/ui/button2';

import type { FC } from 'react';

import styles from './address-card.module.css';

interface AddressCardProps {
  title: string
  description: string
  address: string
  url: Url
}

const cx = classNames.bind(styles);

export const AddressCard: FC<AddressCardProps> = (props) => {
  const {
    title,
    description,
    address,
    url,
  } = props;

  return (
    <div
      className={cx(
        'root',
      )}
    >
      <Icon
        className={cx('icon')}
        glyph="map"
      />
      <h3 className={cx('title')}>
        {title}
      </h3>
      <p className={cx('description')}>
        {description}
      </p>
      <Button
        className={cx('link')}
        size="s"
        border="none"
        href={url}
        icon={(
          <Icon
            glyph="arrow-right"
            width="100%"
            height="100%"
          />
        )}
        iconPosition="right"
      >
        {address}
      </Button>
    </div>
  );
};
