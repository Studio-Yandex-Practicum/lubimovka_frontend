import React from 'react';

import cn from 'classnames/bind';

import styles from './article-share.module.css';
import {ShareLink} from '../../ui/share-link';

const cx = cn.bind(styles);

interface IArticleShare {
  isBlog: boolean;
  authors?: string[];
  photographers?: string[];
  illustrators?: string[];
}

const renderCreators = (label: string, creators: string[]) => {
  if (creators.length == 0) {
    return null;
  }
  return(
    <dl>
      <dt className={cx('label')}>{label}</dt>
      {
        creators.map(creator => {
          return <dd key={creator} className={cx('creator')}>{creator}</dd>;
        })
      }
    </dl>
  );
};

const ArticleShare: React.FC<IArticleShare> = (props) => {
  const {
    isBlog,
    authors = [],
    photographers = [],
    illustrators = [],
  } = props;

  return (
    <section className={cx('container', {newsContainer: !isBlog})}>
      { (authors.length + photographers.length + illustrators.length > 0) &&
        <div className={cx('creators')}>
          {renderCreators('Текст', authors)}
          {renderCreators('Фото', photographers)}
          {renderCreators('Иллюстрации', illustrators)}
        </div>}
      <div className={cx('share', {blogShare: isBlog, newsShare: !isBlog})}>
        <ShareLink className={cx('links')}/>
        <h4 className={cx('shareTitle')}>
          Поделиться <br/>{isBlog ? 'записью' : 'новостью'} в соцсетях</h4>
      </div>
    </section>
  );
};

export default ArticleShare;
