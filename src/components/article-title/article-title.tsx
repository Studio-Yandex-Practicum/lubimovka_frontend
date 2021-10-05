import React from 'react';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

import styles from './article-title.module.css';
import {Button} from '../ui/button';

interface IArticleTitle {
  buttonLabel: 'Блог' | 'Новости',
  title: string,
  description: string,
  date: string,
  author: string,
  imgLink: string,
}

const ArticleTitle: React.FC<IArticleTitle> = (props) => {
  const {
    buttonLabel,
    title,
    description,
    date,
    author,
    imgLink
  } = props;

  return (
    <div className={cx('test')}>
      <Button label={buttonLabel}
        size={'s'}
        iconPlace={'right'}
        icon={'arrow-left'}
        border={'bottomRight'}
        isLink={true}
        view={'primary'}
        align={'start'}
        // href={''} добавить ссылку для перехода на страницу
      />
      <h3 className={cx('title')}>{title}</h3>
      <h6 className={cx('description')}>{description}</h6>
      <p className={cx('date')}>{date}</p>
      {/*заменить на компонент ссылки, когда будет готов*/}
      <p>{author}</p>
      <img className={cx('img')} src={imgLink} alt={title}/>
    </div>
  );
};

export default ArticleTitle;

