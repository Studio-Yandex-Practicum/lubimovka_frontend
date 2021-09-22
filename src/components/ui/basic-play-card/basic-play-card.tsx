import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import ButtonIconExternal from './images/arrow-external.svg';
import ButtonIconDownload from './images/arrow-download.svg';

import styles from './basic-play-card.module.css';

interface IBasicPlayCardProps {
  title: string;
  authorFirstName: string;
  authorLastName: string;
  city: string;
  year: string;
  callToActionView: string;
  callToActionDownload: string;
}

export const BasicPlayCard: FC<IBasicPlayCardProps> = (props) => {
  const {
    title,
    authorFirstName,
    authorLastName,
    city,
    year,
    ...restBasicPlayCardProps
  } = props;

  return (
    <li
      className={cn(styles.card)}
      {...restBasicPlayCardProps}
    >
      <div className={cn(styles.container)}>
        <p className={cn(styles.h7, styles.title)}>{title}</p>
        <div className={cn(styles.buttonContainer)}>
          <Link href=''>
            <button className={cn(styles.button)}>
              <p className={cn(styles.buttonName, styles.smalltext)}>CМОТРЕТЬ ЧИТКУ</p>
              <ButtonIconExternal className={cn(styles.buttonIcon)} alt="Иконка перехода на внешний источник"/>
            </button>
          </Link>
          <Link href=''>
            <button className={cn(styles.button)}>
              <p className={cn(styles.buttonName, styles.smalltext)}>СКАЧАТЬ ПЬЕСУ</p>
              <ButtonIconDownload className={cn(styles.buttonIcon)} alt="Иконка скачивания"/>
            </button>
          </Link>
        </div>
      </div>
      <div className={cn(styles.info)}>
        <div className={cn(styles.author)}>
          <div className={cn(styles.h7)}>{authorFirstName}</div>
          <div className={cn(styles.h7)}>{authorLastName}</div>
        </div>
        <div className={cn(styles.smalltext, styles.city)}>{city}</div>
        <div className={cn(styles.smalltext, styles.year)}>{year}</div>
      </div>
    </li>
  );
};
