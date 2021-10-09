import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './section.module.css';
const cx = classNames.bind(styles);

interface ISectionProps extends HTMLAttributes<HTMLElement> {
  type: 'plays' | 'persons';
  title: string;
  component?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
}

export const Section = (props: ISectionProps): JSX.Element => {
  const {
    type,
    title,
    component: Component = 'h2',
    children,
    ...restProps
  } = props;

  return (
    <section className={cx('section', type)} {...restProps}>
      <Component className={cx('title')}>{title}</Component>
      {children}
    </section>
  );
};
