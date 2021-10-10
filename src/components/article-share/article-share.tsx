import React from 'react';

import cn from 'classnames/bind';

import styles from './article-share.module.css';

const cx = cn.bind(styles);

interface IArticleShare {
  isBlog: boolean;
  authors?: string[];
  photographers?: string[];
  illustrators?: string[];
}

const renderCreators = (label: string, creators: string[]) => {
  return(
    <div>
      <p className={cx('label')}>{label}</p>
      {
        creators.map(creator => {
          return <p key={creator} className={cx('creator')}>{creator}</p>;
        })
      }
    </div>
  );
};

const ArticleShare: React.FC<IArticleShare> = (props) => {
  const {
    isBlog,
    authors,
    photographers,
    illustrators,
  } = props;

  return (
    <div className={cx('container', {newsContainer: !isBlog})}>
      { (authors || photographers || illustrators) &&
        <div className={cx('creators')}>
          {authors &&
            renderCreators('Текст', authors)
          }

          {photographers &&
            renderCreators('Фото', photographers)
          }

          {illustrators &&
            renderCreators('Иллюстрации', illustrators)
          }
        </div>}
      <div className={cx('share', {blogShare: isBlog, newsShare: !isBlog})}>
        <div className={cx('links')}>
          {/*Заменить на компоненты ссылок*/}
          <p className={cx('link')}>FB</p>
          <p className={cx('link')}>VK</p>
          <p className={cx('link')}>Twtr</p>
        </div>
        <h4 className={cx('shareTitle')}>Поделиться<br/>{isBlog ? 'записью' : 'новостью'} в соцсетях</h4>
      </div>
    </div>
  );
};

export default ArticleShare;
