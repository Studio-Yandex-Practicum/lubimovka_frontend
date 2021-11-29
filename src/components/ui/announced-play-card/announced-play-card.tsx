import React, { FC } from 'react';
import cn from 'classnames/bind';

import { Button } from '../button';
// import Image from 'next/image';

import styles from './announced-play-card.module.css';

const cx = cn.bind(styles);

export interface IAnnouncedPlayCardProps {
  isPerformance?: boolean;
  id?: number;
  date: string;
  title: string;
  playwrightArray?: string [];
  directorArray?: string [];
  eventDescription?:string;
  buttonLink: string;
  coverResourceUrl?: string;
  projectCopy?: string;
  className?: string;
  paid?: boolean;
}

export const AnnouncedPlayCard: FC<IAnnouncedPlayCardProps> = (props) => {
  const {
    isPerformance,
    id,
    date,
    title,
    playwrightArray,
    directorArray,
    eventDescription,
    buttonLink,
    coverResourceUrl,
    projectCopy,
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
        playwrightArray && playwrightArray.length > 1 ?
          (<p className={cx('creditsEntry')}>
        Драматурги: {creditsArrayToString (playwrightArray)}
          </p>)
          :
          (<p className={cx('creditsEntry')}>
        Драматург: {playwrightArray}
          </p>)
      }
      {
        directorArray && directorArray.length > 1 ?
          (<p className={cx('creditsEntry')}>
        Режиссёры: {creditsArrayToString (directorArray)}
          </p>)
          :
          (<p className={cx('creditsEntry')}>
          Режиссёр: {directorArray}
          </p>)
      }
    </React.Fragment>
  );

  return (
    <li className={cx('card', [className])}>
      <article className={cx('container')}>
        {coverResourceUrl &&
          // <div className={cx('cover')}>
          //   <Image src={coverResourceUrl} alt={title} layout="fill" objectFit="cover"/>
          // </div>
          <div>
            <img className={cx('cover')} src={coverResourceUrl} alt={title}/>
          </div>
        }
        <div className={cx('info')}>
          <div className={cx('dateInfo')}>
            <p className={cx('date')}>{new Date(date).toLocaleDateString('ru-Ru', { timeZone: 'Europe/Moscow', month: 'long', day:'numeric' })}</p>
            <p className={cx('time')}>{new Date(date).toLocaleTimeString('ru-Ru', { timeZone: 'Europe/Moscow', hour:'numeric', minute:'numeric' })}</p>
          </div>
          <h3 className={cx('title', !coverResourceUrl && 'titleNoCover')}>{title}</h3>
          {directorArray && directorArray.length > 0 && playwrightArray && playwrightArray.length > 0 &&
          <div className={cx('credits')}>
            {creditsRendered}
          </div>
          }
          {eventDescription &&
          <div className={cx('eventDescription')}>
            {eventDescription}
          </div>
          }
          <p className={cx('description')}>{projectCopy}</p>
          <div className={cx('buttonContainer', coverResourceUrl ? 'buttonContainerCoverExists' : 'buttonNoCover')}>
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
    </li>
  );
};
