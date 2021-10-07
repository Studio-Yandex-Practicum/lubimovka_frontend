import { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './article-section-title.module.css';
const cx = classNames.bind(styles);

interface IArticleSectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const ArticleSectionTitle = (props: IArticleSectionTitleProps): JSX.Element => {
  const { children, ...restProps } = props;

  return (
    <h2 className={cx('title')} {...restProps}>
      {children}
    </h2>
  );
};
