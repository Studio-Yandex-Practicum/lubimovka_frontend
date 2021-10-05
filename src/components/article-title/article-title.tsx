import React from 'react';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

import styles from './article-title.module.css';

interface IArticleTitle {
  text: string,
}

const ArticleTitle: React.FC<IArticleTitle> = (props) => {
  const {
    text
  } = props;

  return (
    <div className={cx('test')}>
      {text}
    </div>
  );
};

export default ArticleTitle;

