import React, { FC } from 'react';
import cn from 'classnames';
import { Button } from '../button';

import styles from './announced-play-card.module.css';

interface IAnnouncedPlayCardProps {
  festival: boolean;
  date?: string;
  time: string;
  location?: string;
  title: string;
  synopsis?: string;
  playwrightArray: string [];
  directorArray: string [];
  buttonLinks: string [];
  coverResourceUrl?: string;
}

export const AnnouncedPlayCard: FC<IAnnouncedPlayCardProps> = (props) => {
  const {
    festival,
    date,
    time,
    location,
    title,
    synopsis,
    playwrightArray,
    directorArray,
    buttonLinks,
    coverResourceUrl,
    ...restAnnouncedPlayCardProps
  } = props;

  const creditsArrayToString = (array: string []) => {
    const string = array.join(', ').replace(/, ([^,]*)$/, ' и $1');
    return string;
  };

  const creditsRendered = (
    <React.Fragment>
      {
        playwrightArray.length > 1 ?
          (<p className={cn(styles.creditsEntry)}>
        Драматурги: {creditsArrayToString (playwrightArray)}
          </p>)
          :
          (<p className={cn(styles.creditsEntry)}>
        Драматург: {playwrightArray}
          </p>)
      }
      {
        directorArray.length > 1 ?
          (<p className={cn(styles.creditsEntry)}>
        Режиссёры: {creditsArrayToString (directorArray)}
          </p>)
          :
          (<p className={cn(styles.creditsEntry)}>
          Режиссёр: {directorArray}
          </p>)
      }
    </React.Fragment>
  );

  return !festival ? (
    <li
      className={cn(styles.cardEvents)}
      {...restAnnouncedPlayCardProps}
    >
      {coverResourceUrl &&
        <div className={cn(styles.coverEvents)}>
          <img className={cn(styles.coverEvents)} src={coverResourceUrl}></img>
        </div>
      }
      <div className={cn(styles.infoEvents)}>
        <div className={cn(styles.dateInfo)}>
          <p className={cn(styles.date)}>{date}</p>
          <p className={cn(styles.timeEvents)}>{time}</p>
        </div>
        <h5 className={cn(styles.title)}>{title}</h5>
        <div className={cn(styles.credits)}>
          {creditsRendered}
        </div>
        <p className={cn(styles.description)}>читка проекта Любимовка.Ещё</p>
        {buttonLinks.length === 2 &&
          <div className={cn(styles.buttonEventsContainer, coverResourceUrl && styles.buttonEventsContainerCoverExists )}>
            <Button
              view='primary'
              width='154px'
              className={styles.buttonEvents}
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
              className={styles.buttonEvents}
              align='start'
              gap='9px'
              size='s'
              iconPlace='left'
              icon='arrow-right'
              label='Билеты'
              border='bottomLeft'
              isLink={true}
              href={buttonLinks[1]}
            />
          </div>
        }
        {buttonLinks.length === 1 &&
          <div className={cn(styles.buttonEventsContainer, coverResourceUrl ? styles.buttonEventsContainerCoverExists : styles.buttonEventsNoCover)}>
            <Button
              view='primary'
              width='154px'
              className={styles.buttonEvents}
              align='start'
              gap='9px'
              size='s'
              iconPlace='left'
              icon='arrow-right'
              label='Регистрация'
              border='bottomLeft'
              isLink={true}
              href={buttonLinks[0]}
            />
          </div>
        }
      </div>
    </li>
  ) : (
    <li
      className={cn(styles.cardFestival)}
      {...restAnnouncedPlayCardProps}
    >
      {coverResourceUrl ?
        (<>
          <img className={cn(styles.coverFestival)} src={coverResourceUrl}></img>
          <h6 className={cn(styles.timeFestival)}>{time}</h6>
          <p className={cn(styles.location)}>{location}</p>
          <h6 className={cn(styles.titleFestival)}>{title}</h6>
          <p className={cn(styles.synopsis)}>{synopsis}</p>
        </>
        )
        : (
          <>
            <div className={cn(styles.coverFestivalNoCover)} ></div>
            <h6 className={cn(styles.timeFestival)}>{time}</h6>
            <p className={cn(styles.location)}>{location}</p>
            <h6 className={cn(styles.titleFestival, styles.titleFestivalNoCover)}>{title}</h6>
            <p className={cn(styles.synopsis)}>{synopsis}</p>
          </>
        )
      }
      <div className={cn(styles.creditsFestival)}>
        {creditsRendered}
      </div>
      {
        buttonLinks.length > 0 ?
          (
            <div className={cn(styles.buttonFestivalContainer)}>
              <Button
                view='primary'
                width='154px'
                align='start'
                gap='9px'
                size='s'
                iconPlace='left'
                icon='arrow-right'
                label='Регистрация'
                border='bottomLeft'
                isLink={true}
                href={buttonLinks[0]}
              />
            </div>
          ) : (<div className={cn(styles.buttonFestivalContainer, styles.buttonFestivalContainerNoButton)}></div>)
      }
    </li>
  );
};
