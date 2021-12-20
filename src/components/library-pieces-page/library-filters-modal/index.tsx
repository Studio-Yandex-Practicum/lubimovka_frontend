import classNames from 'classnames/bind';
import { FC, ReactNode } from 'react';

import styles from './index.module.css';

interface ILibraryFiltersModalProps {
  children: ReactNode;
  isModalOpen: boolean;
}

const cx = classNames.bind(styles);

const LibraryFiltersModal: FC<ILibraryFiltersModalProps> = ({ children, isModalOpen }) => {
  return (
    <section className={cx('wrap', { [styles.isOpen]: isModalOpen })}>
      {children}
    </section>
  );
};

export default LibraryFiltersModal;
