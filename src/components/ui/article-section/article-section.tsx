import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import styles from './article-section.module.css';
const cx = classNames.bind(styles);

interface IArticleSectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  children: ReactNode;
}

export const ArticleSection = (props: IArticleSectionProps): JSX.Element => {
  const { title, children, ...restProps } = props;

  return (
    <section className={cx('articleSection')} {...restProps}>
      <h2 className={cx('title')}>{title}</h2>
      {children}
    </section>
  );
};
