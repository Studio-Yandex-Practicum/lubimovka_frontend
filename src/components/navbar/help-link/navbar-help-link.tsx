import Link, { LinkProps } from 'next/link';
import cn from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './navbar-help-link.module.css';

const cx = cn.bind(styles);

interface INavbarHelpLinkProps extends Pick<LinkProps, 'href'> {
  label: string;
}

export const NavbarHelpLink = (props: INavbarHelpLinkProps ): JSX.Element => {
  const { label, href } = props;

  return (
    <Link href={href}>
      <a className={cx('link')}>
        <Icon glyph="plus" className={cx('icon')}/>
        <span className={cx('text')}>
          {label}
        </span>
      </a>
    </Link>
  );
};
