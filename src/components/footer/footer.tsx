import classNames from 'classnames/bind';
import Link from 'next/link';

import { FooterCopyright } from 'components/footer-copyright';
import Logo from 'shared/images/full-logo.svg';

import { FooterNavigation } from './navigation';
import { FooterPartners } from './partners';
import { FooterProjects } from './projects';

import type { ReactNode } from 'react';

import styles from './footer.module.css';

interface FooterProps {
  className?: string
  privacyPolicyUrl?: string
  children?: ReactNode
}

const cx = classNames.bind(styles);

export const Footer = (props: FooterProps): JSX.Element => {
  const {
    className,
    privacyPolicyUrl,
    children,
  } = props;

  return (
    <footer className={cx('footer', className)}>
      <Link href="/">
        <Logo className={cx('logo')}/>
      </Link>
      {children}
      <FooterCopyright
        className={cx('footnote')}
        privacyPolicyUrl={privacyPolicyUrl}
      />
    </footer>
  );
};

Footer.Navigation = FooterNavigation;
Footer.Projects = FooterProjects;
Footer.Partners = FooterPartners;
