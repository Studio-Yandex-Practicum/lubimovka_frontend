import { FC } from 'react';
import cn from 'classnames';
import styles from './tag.module.css';

interface ITagProps {
  label: string;
}

export const Tag: FC<ITagProps> = (props) => {
  const {
    label
  } = props;

  return (
    <div
      className={cn(styles.tag)}
    >
      {label}
    </div>
  );
};
