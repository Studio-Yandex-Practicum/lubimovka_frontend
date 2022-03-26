import { forwardRef } from 'react';
import classNames from 'classnames/bind';

import type { ReactNode, PropsWithChildren } from 'react';

import styles from './button.module.css';

interface CommonProps {
  size?: 'm'
  icon: ReactNode
  iconPosition: 'left' | 'right'
  border?: 'right-bottom-left' | 'none'
  fullWidth?: boolean
  className?: string
}

interface ButtonProps extends CommonProps {
  href: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

interface AnchorProps extends CommonProps {
  type: 'submit' | 'reset' | 'button';
  onCLick: () => void
}

const cx = classNames.bind(styles);

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, PropsWithChildren<ButtonProps | AnchorProps>>((props, ref) => {
  const {
    className,
    size = 'm',
    border = 'none',
    fullWidth,
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
        { 'full-width': fullWidth },
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
