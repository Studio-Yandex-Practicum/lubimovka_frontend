
import { FC } from 'react';

import { Partners } from 'components/partners';

import styles from './mainPartners.module.css';

export const MainPartners: FC = () => {
  return <Partners className={styles.mainPartners}/>;
};
