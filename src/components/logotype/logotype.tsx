import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import classNames from 'classnames/bind';

import CompactLogo from 'shared/images/compact-logo.svg';
import FullLogo from 'shared/images/full-logo.svg';
import styles from './logotype.module.css';

interface ILogotypeProps extends Pick<LinkProps, 'href'> {
  title?: string,
  className?: string,
  full?: boolean,
  onClick?: React.MouseEventHandler,
}

const cx = classNames.bind(styles);

export const Logotype: FC<ILogotypeProps> = (props) => {
  const {
    href,
    title,
    full,
    onClick,
  } = props;

  return (
    <Link href={href}>
      <a
        onClick={onClick}
        className={cx(
          'link',
          { full }
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
