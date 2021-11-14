import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './share.module.css';
import { ShareLink } from '../ui/share-link';

interface IShareProps {
  type: 'blog' | 'news' | 'performance';
  size: 's' | 'l';
}

const cx = classNames.bind(styles);

export const Share: FC<IShareProps> = (props) => {
  const {
    type,
    size,
  } = props;

  return (
    <div className={cx('share', size)}>
      <ShareLink className={cx('links')}/>
      <h4 className={cx('title')}>
        {type === 'performance' ? 'Рассказать' : 'Поделиться'}
        <span className={cx('span')}></span>
        {type === 'blog' && ' записью '}
        {type === 'news' && ' новостью '}
        {type === 'performance' && ' о спектакле '}
        в&nbsp;соцсетях
      </h4>
    </div>
  );
};
