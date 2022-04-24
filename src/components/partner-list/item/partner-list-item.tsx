import { FC } from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';

import { ConditionalWrapper } from 'components/conditional-wrapper';

import type { Url } from 'shared/types';

import style from './partner-list-item.module.css';

const cx = classNames.bind(style);

interface PartnerListItemProps {
  name: string,
  logo: Url,
  url?: Url,
}

export const PartnerListItem: FC<PartnerListItemProps> = (props) => {
  const {
    name,
    logo,
    url,
  } = props;

  return (
    <li className={cx('root')}>
      <ConditionalWrapper
        condition={!!url}
        wrapper={(children) => (
          <a href={url!} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
      >
        <>
          <div className={cx('logo-canvas')}>
            <Image
              className={cx('logo')}
              src={logo}
              alt={name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className={cx('hidden-text')}>
            {name}
          </span>
        </>
      </ConditionalWrapper>
    </li>
  );
};
