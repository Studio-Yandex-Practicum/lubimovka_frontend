import { FC } from 'react';
import cn from 'classnames/bind';

import { Partners, IPartner } from 'components/partners';

import styles from './main-partners.module.css';

const cx = cn.bind(styles);

export const MainPartner: FC<IPartner> = (props): JSX.Element => <Partners {...props} className={cx('container')}/>;
