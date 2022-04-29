import React from 'react';
import cn from 'classnames/bind';
import Image from 'next/image';

import { Button } from '../../ui/button';
import { InfoLink } from '../../ui/info-link';
import { Url } from '../../../shared/types';

import styles from './article-title.module.css';

const cx = cn.bind(styles);

interface IArticleTitle {
  isBlog: boolean,
  title: string,
  description: string,
  date: string,
  author?: string,
  authorLink?: Url,
  imgLink?: Url,
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
    <section className={cx('container', { containerTypeNews: !isBlog })}>
      <Button
        className={cx({ backButtonBlog: isBlog, backButtonNews: !isBlog })}
        label={isBlog ? 'Блог' : 'Новости'}
        size={'s'}
        iconPlace={'right'}
        icon={'arrow-left'}
        border={'bottomRight'}
        isLink
        view={'primary'}
        align={'space-between'}
        href={isBlog ? '/blog' : '/news'}
      />
      {imgLink && (
        <div className={cx('img')}>
          <Image
            src={imgLink}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <h3 className={cx('title')}>
        {title}
      </h3>
      <h6 className={cx('description')}>
        {description}
      </h6>
      <p className={cx('date', { dateNews: !isBlog })}>
        {new Date(date).toLocaleDateString('ru-Ru', { month: 'long', day:'numeric', year:'numeric' }).replace(' г.', '')}
      </p>
      {isBlog && (
        <InfoLink
          isOutsideLink
          label={author || ''}
          icon={'arrow-45'}
          iconPlace={'right'}
          size={'m'}
          href={authorLink}
          className={cx('author')}
        />
      )}
    </section>
  );
};

export default ArticleTitle;

