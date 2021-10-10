import React from 'react';

import cn from 'classnames/bind';

import styles from './article-share.module.css';

const cx = cn.bind(styles);

interface IArticleShare {
  authors?: string[];
  photographers?: string[];
  illustrators?: string[];
}

const renderCreators = (label: string, creators: string[]) => {
  return(
    <>
      <p className={cx('label')}>{label}</p>
      {
        creators.map(creator => {
          return <p key={creator} className={cx('creator')}>{creator}</p>;
        })
      }
    </>
  );
};

const ArticleShare: React.FC<IArticleShare> = (props) => {
  const {
    authors,
    photographers,
    illustrators,
  } = props;

  return (
    <div className={cx('container')}>
      <div className={cx('creators')}>
        { authors &&
         renderCreators('Текст', authors)
        }

        { photographers &&
        renderCreators('Фото', photographers)
        }

        { illustrators &&
        renderCreators('Иллюстрации', illustrators)
        }
      </div>
      <div className={cx('share')}>
        <div className={cx('links')}>
          {/*Заменить на компоненты ссылок*/}
          <p>FB</p>
          <p>VK</p>
          <p>Twtr</p>
        </div>
        <h4>Поделиться записью в соцсетях</h4>
      </div>
    </div>
  );
};

export default ArticleShare;
