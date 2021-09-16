import styles from './Big-button.module.css';
import React from 'react';
import cn from 'classnames';

interface BigButtonInterface {
  isAccent: boolean;
  arrow: 'arrow-down' | 'arrow-diagonal' | 'arrow-right';
  border: 'border-full' | 'border-top';
  label: string;
  onClick?: () => void;
}

const BigButton: React.FC<BigButtonInterface> = ({isAccent = false, arrow, label, border, onClick}) => {
  return (
    <button
      className={cn(styles.font, styles.button, isAccent && styles.accent, styles[arrow], styles[border])}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default BigButton;
