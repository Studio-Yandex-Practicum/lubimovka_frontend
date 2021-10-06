import { FC, useState } from 'react';
import cn from 'classnames/bind';
import styles from './main-aside.module.css';

const cx = cn.bind(styles);

export const MainAside: FC = () => {
  const [active, setActive] = useState(false);
  const handleAside = () => {
    setActive(!active);
  };
  return (
    <aside className={cx('aside', {active})} onClick={handleAside}> <h2 className={cx('title')}>Компонент MainAside</h2> </aside>
  );
};

