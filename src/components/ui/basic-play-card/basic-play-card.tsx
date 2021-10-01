import { FC } from 'react';
import cn from 'classnames/bind';
import Link from 'next/link';
import { Button } from '../button';

import styles from './basic-play-card.module.css';

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
    firstName: string;
    lastName: string;
  };
}

export const BasicPlayCard: FC<IBasicPlayCardProps> = (props) => {
  const {
    play,
    author,
    ...restBasicPlayCardProps
  } = props;

  return (
    <li
      className={cn(styles.card)}
      {...restBasicPlayCardProps}
    >
      <div className={cn(styles.container)}>
        <h6 className={cn(styles.title)}>{play.title}</h6>
        <div>
          <Button
            className={styles.buttonCustom}
            width='100%'
            size='l'
            view='primary'
            iconPlace='right'
            icon='arrow-45'
            label='Смотреть читку'
            border='top'
            isLink={true}
            href={play.linkView}
          />
          <Button
            className={styles.buttonCustom}
            width='100%'
            size='l'
            view='primary'
            iconPlace='right'
            icon='arrow-down'
            label='Скачать пьесу'
            border='top'
            isLink={true}
            href={play.linkDownload}
          />
        </div>
      </div>
      <div className={cn(styles.info)}>
        <Link href={`/authors/${author.id}`} passHref>
          <h6 className={cn(styles.author)}>{author.firstName}<br />{author.lastName}</h6>
        </Link>
        <p className={cn(styles.city)}>{play.city}</p>
        <p className={cn(styles.year)}>{play.year}</p>
      </div>
    </li>
  );
};
