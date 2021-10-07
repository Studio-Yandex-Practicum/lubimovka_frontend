import React from 'react';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

import styles from './article-title.module.css';
import {Button} from '../ui/button';

interface IArticleTitle {
  isBlog: boolean,
  title: string,
  description: string,
  date: string,
  author?: string,
  imgLink: string,
}

const ArticleTitle: React.FC<IArticleTitle> = (props) => {
  const {
    isBlog,
    title,
    description,
    date,
    author,
    imgLink
  } = props;

  return (
    <div className={cx('container')}>
      <Button className={cx({backToBlogButton:isBlog, backToNewsButton: !isBlog})}
        label={isBlog ? 'Блог' : 'Новости'}
        size={'s'}
        iconPlace={'right'}
        icon={'arrow-left'}
        border={'bottomRight'}
        isLink={true}
        view={'primary'}
        align={'space-between'}
        // href={''} добавить ссылку для перехода на страницу
      />

      <img className={cx('img')} src={imgLink} alt={title}/>

      <h3 className={cx('title')}>{title}</h3>
      <h6 className={cx('description')}>{description}</h6>

      <p className={cx('date', {dateNews: !isBlog})}>{date}</p>
      {/*заменить на компонент ссылки, когда будет готов*/}
      {isBlog && <p className={cx('author')}>{author}</p>}


    </div>
  );
};

export default ArticleTitle;

