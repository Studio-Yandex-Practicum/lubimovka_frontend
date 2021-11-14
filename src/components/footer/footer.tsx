import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { FooterAddress } from './address';
import { FooterNavigation } from './navigation';
import { FooterProjects } from './projects';
import { FooterPartners } from './partners';
import { FooterPartnerList } from './partner-list';
import { FooterPartnerListItem } from './partner-list-item';

import Logo from 'shared/images/logo-full.svg';

import styles from './footer.module.css';

interface IFooterProps {
  children: ReactNode,
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
      <div className={cx('footnote')}>
        <div className={cx('copyright')}>
          &copy; Любимовка, {new Date().getFullYear()}
        </div>
        <a href="#" className={cx('link')} target="_blank" rel="noreferrer">Политика конфиденциальности</a>
        <dl className={cx('credits')}>
          <div className={cx('shishki')}>
            <dt className={cx('term')}>
              дизайн сайта
            </dt>
            <dd>
              <a className={cx('link')} href="#" target="_blank" rel="noreferrer">shishki.collective</a>
            </dd>
          </div>
          <div>
            <dt>
              вёрстка и разработка
            </dt>
            <dd>
              студенты <a className={cx('link')} href="#" target="_blank">Яндекс.Практикума</a>
            </dd>
          </div>
        </dl>
      </div>
    </footer>
  );
};

Footer.Address = FooterAddress;
Footer.Navigation = FooterNavigation;
Footer.Projects = FooterProjects;
Footer.Partners = FooterPartners;
Footer.PartnerList = FooterPartnerList;
Footer.PartnerListItem = FooterPartnerListItem;
