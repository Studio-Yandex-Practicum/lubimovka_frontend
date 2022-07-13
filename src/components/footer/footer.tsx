import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { FooterCopyright } from 'components/footer-copyright';
import { FooterNavigation } from './navigation';
import { FooterProjects } from './projects';
import { FooterPartners } from './partners';

import Logo from 'shared/images/full-logo.svg';
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
      <Logo className={cx('logo')}/>
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
