import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { Button } from '../button';

import styles from './basic-play-card.module.css';

interface IBasicPlayCardProps {
  play: {
    title: string;
    city: string;
    year: string;
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
        <p className={cn(styles.h7, styles.title)}>{play.title}</p>
        <div>
          <Button
            width='240px'
            size='l'
            view='secondary'
            iconPlace='right'
            icon='arrow-45'
            label='Смотреть читку'
            border='top'
          />
          <Button
            width='240px'
            size='l'
            view='secondary'
            iconPlace='right'
            icon='arrow-down'
            label='Скачать пьесу'
            border='top'
          />
          {/* <Link href={play.linkView}>
            <button className={cn(styles.button)}>
              <p className={cn(styles.buttonName, styles.smalltext)}>CМОТРЕТЬ ЧИТКУ</p>
              <ButtonIconExternal className={cn(styles.buttonIcon)} alt="Иконка кнопки"/>
            </button>
          </Link>
          <Link href={play.linkDownload}>
            <button className={cn(styles.button)}>
              <p className={cn(styles.buttonName, styles.smalltext)}>СКАЧАТЬ ПЬЕСУ</p>
              <ButtonIconDownload className={cn(styles.buttonIcon)} alt="Иконка кнопки"/>
            </button>
          </Link> */}
        </div>
      </div>
      <div className={cn(styles.info)}>
        <Link href={`/authors/${author.id}`} passHref>
          <div className={cn(styles.author)}>
            <p className={cn(styles.h7, styles.authorName)}>{author.firstName}</p>
            <p className={cn(styles.h7, styles.authorName)}>{author.lastName}</p>
          </div>
        </Link>
        <p className={cn(styles.smalltext, styles.city)}>{play.city}</p>
        <p className={cn(styles.smalltext, styles.year)}>{play.year}</p>
      </div>
    </li>
  );
};
