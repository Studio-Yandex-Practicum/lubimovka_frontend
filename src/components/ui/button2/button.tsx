import { forwardRef } from 'react';
import classNames from 'classnames/bind';

import type { ReactNode, PropsWithChildren } from 'react';

import styles from './button.module.css';

interface CommonProps {
  size?: 'xs' | 's' | 'm' | 'l'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  border?: 'full' | 'right-bottom-left' | 'bottom-left' | 'right-bottom' | 'none' | 'top-left' | 'top'
  fullWidth?: boolean
  upperCase?: boolean
  disabled?: boolean
  className?: string
  style?: Record<string, string>
}

interface AnchorProps extends CommonProps {
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

interface ButtonProps extends CommonProps {
  type: 'submit' | 'reset' | 'button';
  onClick: () => void
}

const cx = classNames.bind(styles);

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, PropsWithChildren<ButtonProps | AnchorProps>>((props, ref) => {
  const {
    className,
    size = 'm',
    border = 'none',
    fullWidth,
    upperCase,
    disabled,
    icon,
    iconPosition = 'left',
    children,
    ...restProps
  } = props;

  const isLink = 'href' in props;
  const Tag = isLink ? 'a' : 'button';

  return (
    <Tag
      className={cx(
        size,
        `border-${border}`,
        {
          'full-width': fullWidth,
          'upper-case': upperCase,
          disabled,
        },
        className,
      )}
      // @ts-expect-error
      ref={ref}
      {...restProps}
    >
      {icon && (
        <span className={cx(`icon-${iconPosition}`)}>
          {icon}
        </span>
      )}
      <span className={cx('text')}>
        {children}
      </span>
    </Tag>
  );
});

Button.displayName = 'Button';
