import React, { FC } from 'react';
import cn from 'classnames/bind';
import { Button } from '../button';

import styles from './announced-play-card.module.css';

const cx = cn.bind(styles);

interface IAnnouncedPlayCardProps {
  date: string;
  time: string;
  title: string;
  playwrightArray: string [];
  directorArray: string [];
  eventDescription?:string;
  buttonLinks: string [];
  coverResourceUrl?: string;
}

export const AnnouncedPlayCard: FC<IAnnouncedPlayCardProps> = (props) => {
  const {
    date,
    time,
    title,
    playwrightArray,
    directorArray,
    eventDescription,
    buttonLinks,
    coverResourceUrl,
  } = props;

  const creditsArrayToString = (array: string []) => {
    const string = array.join(', ').replace(/, ([^,]*)$/, ' и $1');
    return string;
  };

  const creditsRendered = (
    <React.Fragment>
      {
        playwrightArray.length > 1 ?
          (<p className={cx('creditsEntry')}>
        Драматурги: {creditsArrayToString (playwrightArray)}
          </p>)
          :
          (<p className={cx('creditsEntry')}>
        Драматург: {playwrightArray}
          </p>)
      }
      {
        directorArray.length > 1 ?
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
    <article
      className={cx('card')}
    >
      {coverResourceUrl &&
        <div >
          <img className={cx('cover')} src={coverResourceUrl}></img>
        </div>
      }
      <div className={cx('info')}>
        <div className={cx('dateInfo')}>
          <p className={cx('date')}>{date}</p>
          <p className={cx('time')}>{time}</p>
        </div>
        <h5 className={cx('title', !coverResourceUrl && 'titleNoCover')}>{title}</h5>
        { directorArray.length > 0 && playwrightArray.length > 0 &&
        <div className={cx('credits')}>
          {creditsRendered}
        </div>
        }
        { eventDescription &&
        <div className={cx('eventDescription')}>
          {eventDescription}
        </div>
        }
        <p className={cx('description')}>читка проекта Любимовка.Ещё</p>
        {buttonLinks.length === 2 &&
          <div className={cx('buttonContainer', coverResourceUrl && 'buttonContainerCoverExists' )}>
            <Button
              view='primary'
              width='154px'
              className={cx('button')}
              align='start'
              gap='9px'
              size='s'
              iconPlace='left'
              icon='arrow-right'
              label='О спектакле'
              border='bottomLeft'
              isLink={true}
              href={buttonLinks[0]}
            />
            <Button
              view='primary'
              width='154px'
              className={cx('button')}
              align='start'
              gap='9px'
              size='s'
              iconPlace='left'
              icon='arrow-right'
              label='Билеты'
              border='bottomLeft'
              isLink
              href={buttonLinks[1]}
            />
          </div>
        }
        {buttonLinks.length === 1 &&
          <div className={cx('buttonContainer', coverResourceUrl ? 'buttonContainerCoverExists' : 'buttonNoCover')}>
            <Button
              view='primary'
              width='154px'
              className={cx('button')}
              align='start'
              gap='9px'
              size='s'
              iconPlace='left'
              icon='arrow-right'
              label='Регистрация'
              border='bottomLeft'
              isLink
              href={buttonLinks[0]}
            />
          </div>
        }
      </div>
    </article>
  );
};
