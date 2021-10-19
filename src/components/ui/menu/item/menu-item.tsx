import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import classNames from 'classnames/bind';

import { styles } from '../menu';
import { useMenu } from '../menu.context';

interface IMenuItemProps extends Pick<LinkProps, 'href'> {
  current?: boolean,
  primary?: boolean,
}

export const MenuItem: FC<IMenuItemProps> = (props) => {
  const {
    href,
    current = false,
    primary = false,
    children,
  } = props;
  const { type } = useMenu();
  const cx = classNames.bind(styles[type]);

  return (
    <li className={cx(
      'item',
      {
        current,
        primary
      },
    )}>
      <Link href={href}>
        <a className={cx('link')}>
          {children}
        </a>
      </Link>
    </li>
  );
};
