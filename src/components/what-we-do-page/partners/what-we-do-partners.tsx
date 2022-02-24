import React, { FC } from 'react';
import cn from 'classnames/bind';

import { Partners } from 'components/partners';
import { Partner } from 'api-typings';

import styles from './what-we-do-partners.module.css';

interface IPartner {
  festival: Array<Partner>
  info: Array<Partner>
}

const cx = cn.bind(styles);

export const WhatWeDoPartner: FC<IPartner> = (props): JSX.Element => <Partners {...props} className={cx('padding')}/>;
