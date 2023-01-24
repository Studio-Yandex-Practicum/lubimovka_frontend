import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './button.module.css';

export interface ButtonOwnProps {
  size?: 'xs' | 's' | 'm' | 'l'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  border?: 'full' | 'right-bottom-left' | 'bottom-left' | 'right-bottom' | 'none'
  fullWidth?: boolean
  upperCase?: boolean
  disabled?: boolean
  pressed?: boolean
  className?: string
  children: React.ReactNode
}

type ClickHandler = NonNullable<React.ComponentPropsWithoutRef<'button'>['onClick']>

type HTMLProps = {
  a: Pick<React.ComponentPropsWithoutRef<'a'>, 'href' | 'target' | 'download' | 'rel'>
  button: { type: 'button', onClick: ClickHandler } | { type: 'reset' | 'submit', onClick?: ClickHandler }
}
type DisallowProps<P> = {[K in keyof P]?: never}
type DisallowedProps<E extends keyof HTMLProps> = HTMLProps[keyof (Omit<HTMLProps, E>)]
type PolymorphicProps<E extends keyof HTMLProps> = { as?: E } & HTMLProps[E] & DisallowProps<DisallowedProps<E>>
type ButtonProps = ButtonOwnProps & (PolymorphicProps<'a'> | PolymorphicProps<'button'>)

const cx = classNames.bind(styles);

const Component = (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>) => {
  const {
    as: Tag = 'href' in props ? 'a' : 'button',
    className,
    size = 'm',
    border = 'none',
    fullWidth,
    upperCase,
    disabled,
    pressed,
    icon,
    iconPosition = 'left',
    children,
    ...HTMLProps
  } = props;

  return (
    <Tag
      className={cx(
        size,
        `border-${border}`,
        {
          'full-width': fullWidth,
          'upper-case': upperCase,
          disabled,
          pressed,
        },
        className,
      )}
      // @ts-ignore: TODO
      ref={ref}
      {...HTMLProps}
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
};

export const Button = forwardRef(Component);

Button.displayName = 'Button';
