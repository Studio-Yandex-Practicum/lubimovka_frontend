import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './html-markup.module.css';

interface HTMLMarkupProps {
  variant?: 'default' | 'centered'
  markup: string
  className?: string
}

const cx = classNames.bind(styles);

export const HTMLMarkup: FC<HTMLMarkupProps> = (props) => {
  const {
    variant = 'default',
    markup,
    className,
  } = props;

  return (
    <div
      className={cx(
        variant,
        className
      )}
      dangerouslySetInnerHTML={{
        __html: markup,
      }}
    />
  );
};
