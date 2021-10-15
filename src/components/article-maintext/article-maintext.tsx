import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './article-maintext.module.css';
const cx = classNames.bind(styles);

export interface IBlockquoteExampleProps extends React.HTMLAttributes<HTMLDivElement>{
  children: ReactNode;
}

export const BlockquoteExample: React.FC<IBlockquoteExampleProps> = (props) => {
  const { children } = props;

  return (
    <div className={cx('container')}>
      {children}
    </div>
  );
};
