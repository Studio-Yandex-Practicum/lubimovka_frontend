import styles from './Small-button.module.css';
import React from 'react';
import cn from 'classnames';



interface SmallButtonInterface {
  size?: 'm' | 'l';
  icon: 'icon-arrow-down' | 'icon-arrow-diagonal' | 'icon-arrow-right' | 'icon-arrow-left' | 'icon-plus';
  iconPlace: 'icon-place-left' | 'icon-place-right';
  border: 'border-none' | 'border-top-left' | 'border-top-right' | 'border-bottom-left' | 'border-bottom-right';
  label: string;
  onClick?: () => void;
}

const SmallButton: React.FC<SmallButtonInterface> = ({size , icon, iconPlace, label, border, onClick}) => {
  console.log(styles);
  return (
    <button className={cn(styles.button, styles.font, styles[border], styles[icon], styles[iconPlace], size && styles['size-fixed'], styles[size])}>{label}</button>
  );
};

export default SmallButton;
