import {FC, MouseEvent, ButtonHTMLAttributes} from 'react';
import {Icon, IIconProps} from '../icon';
import cn from 'classnames';
import styles from './button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  view?: 'primary' | 'secondary' | 'transparent',
  icon?: IIconProps['glyph'];
  size?: 's' | 'm' | 'l';
  iconPlace?: 'left' | 'right';
  border?: 'none' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'full';
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IButtonProps> = (props) => {
  const {view = 'primary', size, icon, iconPlace, label, border = 'none', ...restButtonProps} = props;
  return  (
    <button
      className={cn(styles.button, styles[view], styles[border], iconPlace && styles[iconPlace], size && styles['sizeFixed'], size && styles[size])}
      type='button'
      {...restButtonProps}
    >
      {icon && iconPlace == 'left' && <Icon className={styles.icon} glyph={icon}/>}
      <span className={styles.label}>{label}</span>
      {icon && iconPlace === 'right' && <Icon className={styles.icon} glyph={icon}/>}
    </button>
  );
};

