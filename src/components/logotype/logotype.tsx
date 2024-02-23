import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/router';

import CompactLogo from 'shared/images/compact-logo.svg';
import FullLogo from 'shared/images/full-logo.svg';

import type { LinkProps } from 'next/link';
import type { FC } from 'react';

import styles from './logotype.module.css';

interface ILogotypeProps extends Pick<LinkProps, 'href'> {
  title?: string
  className?: string
  full?: boolean
  onClick?: React.MouseEventHandler
}

const cx = classNames.bind(styles);

export const Logotype: FC<ILogotypeProps> = (props) => {
  const {
    href,
    title,
    full,
    onClick,
  } = props;
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        onClick={onClick}
        aria-disabled={router.pathname === '/'}
        className={cx(
          'link',
          { full },
          `${router.pathname === '/' && 'disabled'}`
        )}
        title={title}
      >
        {full
          ? <FullLogo className={cx('image')}/>
          : <CompactLogo className={cx('image')}/>
        }
      </a>
    </Link>
  );
};
