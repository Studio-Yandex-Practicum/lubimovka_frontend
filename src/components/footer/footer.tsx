import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import { FooterAddress } from './address';
import { FooterNavigation } from './navigation';
import { FooterProjects } from './projects';
import { FooterPartners } from './partners';
import { FooterPartnerList } from './partner-list';
import { FooterPartnerListItem } from './partner-list-item';
import { InfoLink } from 'components/ui/info-link';

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
        <InfoLink
          isOutsideLink={true}
          href='#'
          label='Политика конфиденциальности'
          hoverStyle='bottomLine'
          size='xs'
          textDecoration='textDecorationNone'
          className={cx('footnoteLink')}
        />
        <dl className={cx('credits')}>
          <div className={cx('shishki')}>
            <dt className={cx('term')}>
              дизайн сайта
            </dt>
            <dd>
              <InfoLink
                isOutsideLink={true}
                href='#'
                label='shishki.collective'
                hoverStyle='bottomLine'
                size='xs'
                textDecoration='textDecorationNone'
                className={cx('footnoteLink')}
              />
            </dd>
          </div>
          <div>
            <dt>
              вёрстка и разработка
            </dt>
            <dd>
              студенты&nbsp;
              <InfoLink
                isOutsideLink={true}
                href='#'
                label='Яндекс.Практикума'
                hoverStyle='bottomLine'
                size='xs'
                textDecoration='textDecorationNone'
                className={cx('footnoteLink')}
              />
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
