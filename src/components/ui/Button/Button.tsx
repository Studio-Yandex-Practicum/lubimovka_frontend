import { FC } from 'react';

import styles from './Button.module.css';

interface IButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
  } = props;
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={[styles['storybook-button'], styles[`storybook-button--${size}`], styles[mode]].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
