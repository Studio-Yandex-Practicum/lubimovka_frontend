import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './html-markup.module.css';

interface HTMLMarkupProps {
  markup: string
  className?: string
}

const cx = classNames.bind(styles);

export const HTMLMarkup: FC<HTMLMarkupProps> = (props) => {
  const {
    markup,
    className,
  } = props;

  return (
    <div
      className={cx(
        'root',
        className
      )}
      dangerouslySetInnerHTML={{
        __html: markup,
      }}
    />
  );
};
