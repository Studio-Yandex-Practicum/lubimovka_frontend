import { FC } from 'react';
import classNames from 'classnames/bind';

import { ShareLink } from '../ui/share-link';

import styles from './share.module.css';

interface IShareProps {
  firstLine: string;
  secondLine?: string;
  size: 's' | 'l';
}

const cx = classNames.bind(styles);

export const Share: FC<IShareProps> = (props) => {
  const {
    firstLine,
    secondLine,
    size,
  } = props;

  return (
    <div className={cx('share', size)}>
      <div className={cx('title')}>
        <div className={cx('innerContainer')}>
          {firstLine}
          <ShareLink className={cx('links')}/>
        </div>
        <span className={cx('lineBreak')}/>
        {secondLine && `${secondLine} `}
        в&nbsp;соцсетях
      </div>
    </div>
  );
};
