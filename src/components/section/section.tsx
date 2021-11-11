import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './section.module.css';
const cx = classNames.bind(styles);

interface ISectionProps extends HTMLAttributes<HTMLElement> {
  type: 'plays' | 'persons' | 'partners';
  title: string;
  titleTag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
}

export const Section = (props: ISectionProps): JSX.Element => {
  const {
    type,
    title,
    titleTag: TitleTag = 'h2',
    children,
    className = '',
    ...restProps
  } = props;

  return (
    <section className={cx('section', type, [className])} {...restProps}>
      <TitleTag className={cx('title')}>{title}</TitleTag>
      {children}
    </section>
  );
};
