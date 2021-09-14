import { FC } from 'react';
import cn from 'classnames';

import styles from './Body-text.module.css';

interface BodyTextProps {
  size: string
  text: string;
}

export const BodyText: FC<BodyTextProps> = ({ size = 'large', text = 'Paragraph' }) => {
  let result;

  switch (size) {
  case 'large':
    result = <p className={cn(styles.text, styles[size])}>{text}</p>;
    break;
  case 'medium':
    result = <p className={cn(styles.text, styles[size])}>{text}</p>;
    break;
  case 'small':
    result = <p className={cn(styles.text, styles[size])}>{text}</p>;
    break;
  case 'caption':
    result = <p className={cn(styles.text, styles[size])}>{text}</p>;
    break;
  default:
    throw Error('Invalid size value');
  }

  return (
    result
  );
};
