import { cloneElement, FC, AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import { IMenuProps } from './menu';

import styles from './menu-item.module.css';
const cx = classNames.bind(styles);

interface IComponentProps {
  className?: string;
  type: 'navLink' | 'link' | 'button';
  view?: IMenuProps['view'];
  href?: string;
  active?: boolean;
  children: string;
}

export type TMenuItemProps = IComponentProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type'> & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

export const MenuItem: FC<TMenuItemProps> = (props) => {
  const { className, view, href, active, type, children, ...restProps } = props;

  if (href) {
    const { target } = restProps as AnchorHTMLAttributes<HTMLAnchorElement>;

    return cloneElement(
      type === 'navLink' ? <Link href={href} /> : <></>,
      {},
      <a
        rel={target === '_blank' ? 'noreferrer noopener' : undefined}
        className={cx('menuItem', [view], { active })}
        href={type === 'link' ? href : undefined}
        {...(restProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cx('menuItem', 'button', [className], [view], { active })}
      type="button"
      {...(restProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
