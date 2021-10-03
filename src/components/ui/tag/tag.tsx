import { FC } from 'react';
import cn from 'classnames';
import styles from './tag.module.css';

interface ITagProps {
  label: string;
  selected: boolean;
}

export const Tag: FC<ITagProps> = (props) => {
  const {
    label, selected
  } = props;

  return (
    <div
      className={selected ? cn(styles.tag, styles.active) : cn(styles.tag)}
    >
      {label}
    </div>
  );
};
