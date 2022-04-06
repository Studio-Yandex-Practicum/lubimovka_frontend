import { FC } from 'react';
import Image from 'next/dist/client/image';

import styles from './loader.module.css';

import gif from './loader.gif';

export const Loader: FC = () => {
  return (
    <div className={styles.container}>
      <Image width={59} height={56} src={gif} alt="Прелоадер"/>
    </div>
  );
};
