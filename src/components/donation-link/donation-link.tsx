import cn from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Icon } from 'components/ui/icon';

import type { LinkProps } from 'next/link';

import styles from './donation-link.module.css';

const cx = cn.bind(styles);

export const DonationLink = (props: Pick<LinkProps, 'href'>): JSX.Element => {
  const { href } = props;
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a className={cx('link', { active: isActive })}>
        <Icon glyph="plus" className={cx('icon')}/>
        <span className={cx('text')}>
          Поддержать
        </span>
      </a>
    </Link>
  );
};
