import { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Body-text.module.css';

interface BodyTextProps {
  size: 'large' | 'medium' | 'small' | 'caption'
  children: ReactNode
}

export const BodyText: FC<BodyTextProps> = ({ size, children }) => {
  return (
    <p className={cn(styles.text, styles[size])}>{children}</p>
  );
};
