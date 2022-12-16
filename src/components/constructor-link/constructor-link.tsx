import classNames from 'classnames/bind';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

import type { VFC } from 'react';

import styles from './constructor-link.module.css';

const cx = classNames.bind(styles);

interface ConstructorLinkProps {
  description: string
  actionText: string
  url: Url
}

export const ConstructorLink: VFC<ConstructorLinkProps> = (props) => {
  const {
    description,
    actionText,
    url,
  } = props;

  return (
    <div className={cx('root')}>
      <p className={cx('description')}>
        {description}
      </p>
      <Button
        className={cx('action')}
        size="l"
        border="full"
        upperCase
        fullWidth
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
        {actionText}
      </Button>
    </div>
  );
};

