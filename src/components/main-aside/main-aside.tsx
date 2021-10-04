import React, { FC } from 'react';
import cn from 'classnames/bind';
import styles from './main-aside.module.css';

const cx = cn.bind(styles);

export const MainAside: FC = () => {
  const [activeAside, setActiveAside] = React.useState(false);
  const handleAside = () => {
    setActiveAside(!activeAside);
  };
  return (
    <aside className={cx('aside', {activeAside})} onClick={handleAside}> <h2 className={cx('title')}>Компонент MainAside</h2> </aside>
  );
};

