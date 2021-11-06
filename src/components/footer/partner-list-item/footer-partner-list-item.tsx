import { FC } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import style from './footer-partner-list-item.module.css';
import { Url } from 'shared/types';
import { ConditionalWrapper } from 'components/conditional-wrapper';

const cx = classNames.bind(style);

interface IFooterPartnerListItemProps {
  name: string,
  logo: Url,
  url?: Url,
}

export const FooterPartnerListItem: FC<IFooterPartnerListItemProps> = (props) => {
  const {
    name,
    logo,
    url,
  } = props;

  return (
    <li className={cx('item')}>
      <ConditionalWrapper
        condition={!!url}
        wrapper={(children) => (
          <a href={url!} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      >
        <>
          <div className={cx('logoCanvas')}>
            <Image
              className={cx('logo')}
              src={logo}
              alt={name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className={cx('hiddenText')}>
            {name}
          </span>
        </>
      </ConditionalWrapper>
    </li>
  );
};
