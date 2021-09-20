import { FC } from 'react';
import cn from 'classnames';

import styles from './Button-example.module.css';

interface IButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 's' | 'm' | 'l';
  label: string;
  onClick?: () => void;
}

export const ButtonExample: FC<IButtonProps> = (props) => {
  const {
    primary = false,
    size = 'm',
    backgroundColor,
    label,
    ...restButtonProps
  } = props;
  const mode = primary ? 'primary' : 'secondary';

  return (
    <button
      type="button"
      className={cn(styles.button, styles[mode], styles[size])}
      style={{ backgroundColor }}
      {...restButtonProps}
    >
      {label}
    </button>
  );
};
