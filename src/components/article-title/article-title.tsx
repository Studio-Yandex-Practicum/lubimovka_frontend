import React from 'react';
import cn from 'classnames/bind';

const cx = cn.bind(styles);

import styles from './article-title.module.css';
import {Button} from '../ui/button';
import {InfoLink} from '../ui/info-link';

interface IArticleTitle {
  isBlog: boolean,
  title: string,
  description: string,
  date: string,
  author?: string,
  authorLink?: string,
  imgLink: string,
}

const ArticleTitle: React.FC<IArticleTitle> = (props) => {
  const {
    isBlog,
    title,
    description,
    date,
    author,
    imgLink,
    authorLink
  } = props;

  return (
    <section className={cx('container')}>
      <Button className={cx('backButton')}
        label={isBlog ? 'Блог' : 'Новости'}
        size={'s'}
        iconPlace={'right'}
        icon={'arrow-left'}
        border={'bottomRight'}
        isLink={true}
        view={'primary'}
        align={'space-between'}
        width={isBlog ? '90px' : '125px'}
        // href={''} добавить ссылку для перехода на страницу
      />

      <img className={cx('img')} src={imgLink} alt={title}/>

      <h3 className={cx('title')}>{title}</h3>
      <h6 className={cx('description')}>{description}</h6>

      <p className={cx('date', {dateNews: !isBlog})}>{date}</p>
      {isBlog &&
        <nav className={cx('author')}>
          <InfoLink
            isOutsideLink={true}
            label={author || ''}
            icon={'arrow-45'}
            iconPlace={'right'}
            size={'m'}
            href={authorLink}
          />
        </nav>}


    </section>
  );
};

export default ArticleTitle;

