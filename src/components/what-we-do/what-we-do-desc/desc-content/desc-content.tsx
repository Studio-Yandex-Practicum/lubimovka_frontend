import { FC } from 'react';
import cn from 'classnames';

import styles from './desc-content.module.css';

interface IDescContentProps {
  title: string,
  desc: string,
}

export const DescContent: FC<IDescContentProps> = ({ title, desc }): JSX.Element => {
  return (
    <>
      <h3 className={ cn(styles.title) } >
        { title }
      </h3>
      <p className={ cn(styles.desc) }>
        { desc }
      </p>
    </>
  );
};
