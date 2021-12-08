import React, { FC } from 'react';
import cn from 'classnames/bind';
import Image from 'next/image';

import { Button } from '../button';

import styles from './announced-play-card.module.css';

const cx = cn.bind(styles);

export interface IAnnouncedPlayCardProps {
  isPerformance?: boolean;
  id?: number;
  date: string;
  title: string;
  dramatists?: string [];
  directors?: string [];
  description?:string;
  buttonLink: string;
  imageUrl?: string;
  projectText?: string;
  className?: string;
  paid?: boolean;
}

export const AnnouncedPlayCard: FC<IAnnouncedPlayCardProps> = (props) => {
  const {
    isPerformance,
    id,
    date,
    title,
    dramatists,
    directors,
    description,
    buttonLink,
    imageUrl,
    projectText,
    className,
    paid,
  } = props;

  const creditsArrayToString = (array: string []) => {
    const string = array.join(', ').replace(/, ([^,]*)$/, ' и $1');
    return string;
  };

  const creditsRendered = (
    <React.Fragment>
      {
        dramatists && dramatists.length > 1 ?
          (<p className={cx('creditsEntry')}>
        Драматурги: {creditsArrayToString (dramatists)}
          </p>)
          :
          (<p className={cx('creditsEntry')}>
        Драматург: {dramatists}
          </p>)
      }
      {
        directors && directors.length > 1 ?
          (<p className={cx('creditsEntry')}>
        Режиссёры: {creditsArrayToString (directors)}
          </p>)
          :
          (<p className={cx('creditsEntry')}>
          Режиссёр: {directors}
          </p>)
      }
    </React.Fragment>
  );

  return (
    <article className={cx('card', [className])}>
      {imageUrl &&
        <div className={cx('cover')}>
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover"/>
        </div>
      }
      <div className={cx('info')}>
        <div className={cx('dateInfo', !imageUrl && 'dateInfoNoCover')}>
          <p className={cx('date')}>{new Date(date).toLocaleDateString('ru-Ru', { timeZone: 'Europe/Moscow', month: 'long', day:'numeric' })}</p>
          <p className={cx('date')}>{new Date(date).toLocaleTimeString('ru-Ru', { timeZone: 'Europe/Moscow', hour:'numeric', minute:'numeric' })}</p>
        </div>
        <h3 className={cx('title')}>{title}</h3>
        {directors && directors.length > 0 && dramatists && dramatists.length > 0 &&
        <div className={cx('credits')}>
          {creditsRendered}
        </div>
        }
        {description &&
        <div className={cx('description')}>
          {description}
        </div>
        }
        <p className={cx('projectText', imageUrl && 'projectTextCoverExists')}>{projectText}</p>
        <div className={cx('buttonContainer', imageUrl ? 'buttonContainerCoverExists' : 'buttonNoCover')}>
          <Button
            view='primary'
            className={cx('button')}
            align='start'
            gap='9px'
            size='s'
            iconPlace='left'
            icon='arrow-right'
            label={isPerformance ? 'О спектакле' : 'Регистрация'}
            border='bottomLeft'
            isLink
            href={isPerformance ? `/performances/${id}` : buttonLink}
          />
          {paid && isPerformance &&
          <Button
            view='primary'
            className={cx('button')}
            align='start'
            gap='9px'
            size='s'
            iconPlace='left'
            icon='arrow-right'
            label='Билеты'
            border='bottomLeft'
            isLink
            href={buttonLink}
          />
          }
        </div>
      </div>
    </article>
  );
};
