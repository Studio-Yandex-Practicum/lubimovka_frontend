import { FC } from 'react';
import cn from 'classnames';
import styles from './tags.module.css';

interface ITagsProps {
  label: string;
}

export const Tags: FC<ITagsProps> = (props) => {
  const {
    label,
    ...restTagsProps
  } = props;

  return (
    <div
      className={cn(styles.tags)}
      {...restTagsProps}
    >
      {label}
    </div>
  );
};
