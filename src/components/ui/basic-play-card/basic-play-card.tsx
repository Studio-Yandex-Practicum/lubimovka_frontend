import { FC } from 'react';
import cn from 'classnames';
import ButtonIconExternal from './images/arrow-external.svg';
import ButtonIconDownload from './images/arrow-download.svg';

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
        <p className={cn(styles.h7, styles.title)}>{play.title}</p>
        <div className={cn(styles.buttonContainer)}>
          <a href={play.linkView} className={cn(styles.linkReset)}>
            <button className={cn(styles.button)}>
              <p className={cn(styles.buttonName, styles.smalltext)}>CМОТРЕТЬ ЧИТКУ</p>
              <ButtonIconExternal className={cn(styles.buttonIcon)} alt="Иконка перехода на внешний источник"/>
            </button>
          </a>
          <a href={play.linkDownload} className={cn(styles.linkReset)}>
            <button className={cn(styles.button)}>
              <p className={cn(styles.buttonName, styles.smalltext)}>СКАЧАТЬ ПЬЕСУ</p>
              <ButtonIconDownload className={cn(styles.buttonIcon)} alt="Иконка скачивания"/>
            </button>
          </a>
        </div>
      </div>
      <div className={cn(styles.info)}>
        <a href={`/authors/${author.id}`} className={cn(styles.linkReset)}>
          <div className={cn(styles.author)}>
            <div className={cn(styles.h7)}>{author.firstName}</div>
            <div className={cn(styles.h7)}>{author.lastName}</div>
          </div>
        </a>
        <div className={cn(styles.smalltext, styles.city)}>{play.city}</div>
        <div className={cn(styles.smalltext, styles.year)}>{play.year}</div>
      </div>
    </li>
  );
};
