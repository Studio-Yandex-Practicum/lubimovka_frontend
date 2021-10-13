import { FC } from 'react';
import cn from 'classnames/bind';
import Link from 'next/link';
import { Button } from '../button';

import styles from './basic-play-card.module.css';
const cx  = cn.bind(styles);

interface IBasicPlayCardProps {
  play: {
    title: string;
    city: string;
    year: string;
    linkView: string;
    linkDownload: string;
  };
  author: {
    id: number,
    name: string;
  };
}

export const BasicPlayCard: FC<IBasicPlayCardProps> = (props) => {
  const {
    play,
    author,
  } = props;

  return (
    <article
      className={cx('card')}
    >
      <div className={cx('container')}>
        <h6 className={cx('title')}>{play.title}</h6>
        <div>
          <Button
            className={'buttonCustom'}
            width='100%'
            size='l'
            view='primary'
            iconPlace='right'
            icon='arrow-45'
            label='Смотреть читку'
            border='top'
            isLink
            href={play.linkView}
          />
          <Button
            className={'buttonCustom'}
            width='100%'
            size='l'
            view='primary'
            iconPlace='right'
            icon='arrow-down'
            label='Скачать пьесу'
            border='top'
            isLink
            href={play.linkDownload}
          />
        </div>
      </div>
      <div className={cx('info')}>
        <Link href={`/authors/${author.id}`}>
          <h6 className={cx('authorName')}>{author.name}</h6>
        </Link>
        <p className={cx('city')}>{play.city}</p>
        <p className={cx('year')}>{play.year}</p>
      </div>
    </article>
  );
};
