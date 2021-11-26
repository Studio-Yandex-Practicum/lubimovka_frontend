import Link, { LinkProps } from 'next/link';
import cn from 'classnames/bind';

import { Icon } from 'components/ui/icon';

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
