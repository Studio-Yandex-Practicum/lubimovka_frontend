import styles from './button.module.css';
import {FC, MouseEventHandler, ButtonHTMLAttributes} from 'react';
import {Icon, IIconProps} from '../icon';
import cn from 'classnames';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  accent: boolean,
  icon: IIconProps['glyph'];
  size?: 's' | 'm' | 'l';
  iconPlace: 'icon-place-left' | 'icon-place-right';
  border: 'border-none' | 'border-top-left' | 'border-top-right' | 'border-bottom-left' | 'border-bottom-right' | 'border-top' | 'border-full';
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<IButtonProps> = (props) => {
  const {accent, size, icon, iconPlace, label, border, ...restButtonProps} = props;
  console.log(styles);
  return  (
    <button
      className={cn(styles.button, accent && styles.accent, styles[border], styles[iconPlace], size && styles['size-fixed'], size && styles[size])}
      type='button'
      {...restButtonProps}
    >
      {iconPlace == 'icon-place-left' && <Icon className={styles.icon} glyph={icon}/>}
      {label}
      {iconPlace === 'icon-place-right' && <Icon className={styles.icon} glyph={icon}/>}
    </button>
  );
};

export default Button;
