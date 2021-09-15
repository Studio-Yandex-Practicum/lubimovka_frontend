import { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Headline.module.css';

interface HeadlineProps {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7
  children: ReactNode
}

export const Headline: FC<HeadlineProps> = ({ level, children }) => {
  let result;

  switch (level) {
  case 1:
    result = <h1 className={cn(styles.headline, styles[`h${level}`])}>{children}</h1>;
    break;
  case 2:
    result = <h2 className={cn(styles.headline, styles[`h${level}`])}>{children}</h2>;
    break;
  case 3:
    result = <h3 className={cn(styles.headline, styles[`h${level}`])}>{children}</h3>;
    break;
  case 4:
    result = <h4 className={cn(styles.headline, styles[`h${level}`])}>{children}</h4>;
    break;
  case 5:
    result = <h5 className={cn(styles.headline, styles[`h${level}`])}>{children}</h5>;
    break;
  case 6:
    result = <h6 className={cn(styles.headline, styles[`h${level}`])}>{children}</h6>;
    break;
  default:
    result = <p className={cn(styles.headline, styles[`h${level}`])}>{children}</p>;
  }

  return (
    result
  );
};
