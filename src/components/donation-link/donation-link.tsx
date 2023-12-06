import cn from 'classnames/bind';
import Link from 'next/link';

import { Icon } from 'components/ui/icon';

import type { LinkProps } from 'next/link';

import styles from './donation-link.module.css';

const cx = cn.bind(styles);

export const DonationLink = (props: Pick<LinkProps, 'href'>): JSX.Element => {
  const { href } = props;

  return (
    <Link href={href}>
      <a className={cx('link')}>
        <Icon glyph="plus" className={cx('icon')}/>
        <span className={cx('text')}>
          Поддержать
        </span>
      </a>
    </Link>
  );
};
