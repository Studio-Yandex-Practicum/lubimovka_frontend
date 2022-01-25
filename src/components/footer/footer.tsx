import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { FooterCopyright } from 'components/footer-copyright';
import { FooterAddress } from './address';
import { FooterNavigation } from './navigation';
import { FooterProjects } from './projects';
import { FooterPartners } from './partners';

import Logo from 'shared/images/full-logo.svg';
import styles from './footer.module.css';

interface IFooterProps {
  children?: ReactNode,
  className?: string,
}

const cx = classNames.bind(styles);

export const Footer = (props: IFooterProps): JSX.Element => {
  const {
    children,
    className,
  } = props;

  return (
    <footer className={cx('footer', className)}>
      <Logo className={cx('logo')}/>
      {children}
      <FooterCopyright className={cx('footnote')}/>
    </footer>
  );
};

Footer.Address = FooterAddress;
Footer.Navigation = FooterNavigation;
Footer.Projects = FooterProjects;
Footer.Partners = FooterPartners;
