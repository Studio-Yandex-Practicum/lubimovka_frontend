import { FC } from 'react';
import cn from 'classnames';

import styles from './Headline.module.css';

interface HeadlineProps {
  level: number
  text: string;
}

export const Headline: FC<HeadlineProps> = ({ level = 1, text = 'Headline 1' }) => {
  let result;

  switch (level) {
  case 1:
    result = <h1 className={cn(styles.headline, styles[`h${level}`])}>{text}</h1>;
    break;
  case 2:
    result = <h2 className={cn(styles.headline, styles[`h${level}`])}>{text}</h2>;
    break;
  case 3:
    result = <h3 className={cn(styles.headline, styles[`h${level}`])}>{text}</h3>;
    break;
  case 4:
    result = <h4 className={cn(styles.headline, styles[`h${level}`])}>{text}</h4>;
    break;
  case 5:
    result = <h5 className={cn(styles.headline, styles[`h${level}`])}>{text}</h5>;
    break;
  case 6:
    result = <h6 className={cn(styles.headline, styles[`h${level}`])}>{text}</h6>;
    break;
  case 7:
    result = <p className={cn(styles.headline, styles[`h${level}`])}>{text}</p>;
    break;
  default:
    throw Error('Invalid level value');
  }

  return (
    result
  );
};
