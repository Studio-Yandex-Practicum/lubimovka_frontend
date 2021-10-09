import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './section.module.css';
const cx = classNames.bind(styles);

interface ISectionProps extends HTMLAttributes<HTMLElement> {
  type: 'plays' | 'persons';
  title: string;
  children: ReactNode;
}

export const Section = (props: ISectionProps): JSX.Element => {
  const { type, title, children, ...restProps } = props;

  return (
    <section className={cx('section', type)} {...restProps}>
      <h2 className={cx('title')}>{title}</h2>
      {children}
    </section>
  );
};
