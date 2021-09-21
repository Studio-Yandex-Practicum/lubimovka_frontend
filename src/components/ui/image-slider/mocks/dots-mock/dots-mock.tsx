import { FC } from 'react';
import cn from 'classnames';

import styles from './dots-mock.module.css';

interface IDotsMockProps {
  className: string;
  count: number;
  currentSlide: number;
  onClick: (idx: number) => void;
}

export const DotsMock: FC<IDotsMockProps> = ({ className, count, currentSlide, onClick }) => {
  return (
    <div className={styles.dots}>
      {[...Array.from(Array(count).keys())].map((idx) => {
        return (
          <button
            key={idx}
            onClick={() => onClick(idx)}
            className={cn(styles.dot, currentSlide === idx ? styles.dotActive : '', className)}
          />
        );
      })}
    </div>
  );
};
