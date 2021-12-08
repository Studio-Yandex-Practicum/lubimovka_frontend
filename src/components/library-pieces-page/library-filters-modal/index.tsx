import { FC, ReactNode } from 'react';

import styles from './index.module.css';

interface ILibraryFiltersModalProps {
  children: ReactNode;
}

const LibraryFiltersModal: FC<ILibraryFiltersModalProps> = ({ children }) => {
  return (
    <section className={styles.wrap}>
      {children}
    </section>
  );
};

export default LibraryFiltersModal;
