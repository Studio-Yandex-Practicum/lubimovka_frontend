import { FC } from 'react';
import cn from 'classnames';
import arrowRight from './icons/arrow-right.svg';
import arrow45 from './icons/arrow-45.svg';

import styles from './Link.module.css';


interface ILinkProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'number';
  textDecoration?: 'textDecorationNone' | 'underline';
  border?: 'borderNone' | 'borderBottomLeft' | 'borderTop';
  label: string;
  withIcon: boolean;
  icon?: boolean;
  iconSide?: boolean;
  section?: 'footer' | 'noFooter';
  onClick?: () => void;
}

export const Link: FC<ILinkProps> = (props) => {
  const {
    size = 's',
    textDecoration = 'textDecorationNone',
    border = 'borderNone',
    label,
    withIcon,
    icon,
    iconSide,
    section = 'noFooter',
    ...restButtonProps
  } = props;
  const visible = withIcon ? '1' : '2';
  const place = iconSide ? '1' : '2';
  const iconType = icon ? arrowRight : arrow45;

  return (
    <div className={cn(styles.container, styles[border], styles[section])}>
      {visible === '1' && place === '1' && <img src={iconType} className={cn(styles.placeLeft)}/>}
      <a
        href=""
        className={cn(styles.link, styles[size], styles[textDecoration])}
        {...restButtonProps}
      >
        {label}
      </a>
      {visible === '1' && place === '2' && <img src={iconType} className={cn(styles.placeRight)}/>}
    </div>
  );
};
