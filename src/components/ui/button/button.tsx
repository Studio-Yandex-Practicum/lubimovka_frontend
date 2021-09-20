import styles from './button.module.css';
import {FC, MouseEventHandler, ButtonHTMLAttributes} from 'react';
import {Icon, IIconProps} from '../icon';
import cn from 'classnames';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  accent: boolean,
  icon: IIconProps['glyph'];
  size?: 's' | 'm' | 'l';
  iconPlace: 'iconPlaceLeft' | 'iconPlaceRight';
  border: 'borderNone' | 'borderTopLeft' | 'borderTopRight' | 'borderBottomLeft' | 'borderBottomRight' | 'borderTop' | 'borderFull';
  label: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = (props) => {
  const {accent = false, size, icon, iconPlace, label, border, ...restButtonProps} = props;
  return  (
    <button
      className={cn(styles.button, accent && styles.accent, styles[border], styles[iconPlace], size && styles['sizeFixed'], size && styles[size])}
      type='button'
      {...restButtonProps}
    >
      {iconPlace == 'iconPlaceLeft' && <Icon className={styles.icon} glyph={icon}/>}
      {label}
      {iconPlace === 'iconPlaceRight' && <Icon className={styles.icon} glyph={icon}/>}
    </button>
  );
};

export default Button;
