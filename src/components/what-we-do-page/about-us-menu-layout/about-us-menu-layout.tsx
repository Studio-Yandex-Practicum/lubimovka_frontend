import { HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import { AboutUsMenuItem } from './item';

import styles from './about-us-menu-layout.module.css';

const cx = classNames.bind(styles);

interface IAboutUsMenuLayoutProps extends HTMLAttributes<HTMLDivElement> {}

export const AboutUsMenuLayout = (props: IAboutUsMenuLayoutProps): JSX.Element => {
  const {
    className,
    children,
  } = props;

  return (
    <ul className={cx('menu', className)}>
      {children}
    </ul>
  );
};

AboutUsMenuLayout.Item = AboutUsMenuItem;
