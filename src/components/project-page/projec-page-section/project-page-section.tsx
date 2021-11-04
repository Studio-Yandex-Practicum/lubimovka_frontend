import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './project-page-section.module.css';
const cx = classNames.bind(styles);

interface IProjecPageSectionProps extends HTMLAttributes<HTMLElement> {
  type?: 'video' | 'photo' | 'performances' | 'plays' | 'person' | 'cooperation';
  title?: string;
  children: ReactNode;
}

export const ProjecPageSection = (props: IProjecPageSectionProps): JSX.Element => {
  const {
    type,
    title,
    children,
    ...restProps
  } = props;

  return (
    <section className={cx('section', type)} {...restProps}>
      {title && <h2 className={cx('title')}>{title}</h2>}
      {children}
    </section>
  );
};
