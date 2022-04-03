import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './html-markup.module.css';

interface HTMLMarkupProps {
  markup: string
}

const cx = classNames.bind(styles);

export const HTMLMarkup: FC<HTMLMarkupProps> = (props) => {
  const {
    markup,
  } = props;

  return (
    <div
      className={cx('root')}
      dangerouslySetInnerHTML={{
        __html: markup,
      }}
    />
  );
};
