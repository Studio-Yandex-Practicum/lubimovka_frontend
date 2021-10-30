import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import classNames from 'classnames/bind';

import Logo from 'shared/images/logo.svg';
import styles from './logotype.module.css';

interface ILogotypeProps extends Pick<LinkProps, 'href'> {
  title?: string,
  className?: string,
  onClick?: React.MouseEventHandler,
}

const cx = classNames.bind(styles);

export const Logotype: FC<ILogotypeProps> = (props) => {
  const {
    href,
    title,
    className,
    onClick,
  } = props;

  return (
    <Link href={href}>
      <a onClick={onClick} className={cx('link', className)} title={title}>
        <Logo className={cx('image')}/>
      </a>
    </Link>
  );
};
