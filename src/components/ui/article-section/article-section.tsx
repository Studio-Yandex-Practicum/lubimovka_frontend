import { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import { ArticleSectionTitle } from './article-section-title';

import styles from './article-section.module.css';
const cx = classNames.bind(styles);

interface IArticleSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

const ArticleSection = (props: IArticleSectionProps): JSX.Element => {
  const { children, ...restProps } = props;

  return (
    <section className={cx('articleSection')} {...restProps}>
      {children}
    </section>
  );
};

ArticleSection.Title = ArticleSectionTitle;

export { ArticleSection };
