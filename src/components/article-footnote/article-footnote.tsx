import classNames from 'classnames/bind';

import type { ReactNode,VFC } from 'react';

import styles from './article-footnote.module.css';

interface ArticleFootnoteProps {
  colors?: 'default' | 'brand'
  credits?: ReactNode
  action?: ReactNode
  className?: string
}

const cx = classNames.bind(styles);

export const ArticleFootnote: VFC<ArticleFootnoteProps> = (props) => {
  const {
    colors = 'default',
    credits,
    action,
    className,
  } = props;

  return (
    <section className={cx(colors, className)}>
      {credits && (
        <div className={cx('credits')}>
          {credits}
        </div>
      )}
      {action && (
        <div className={cx('action')}>
          {action}
        </div>
      )}
    </section>
  );
};
