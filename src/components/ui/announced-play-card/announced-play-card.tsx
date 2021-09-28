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
  array: string [];
  // creditsArrayToString( array: string[]): void;
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

  const creditsArrayToString = (array) => {
    const string = array.join(', ').replace(/, ([^,]*)$/, ' и $1');
    return string;
  };

  const creditsRendered = (
    <React.Fragment>
      {
        playwrightArray.length > 1 ?
          (<p className={cn(styles.smalltext,styles.creditsEntry)}>
        Драматурги: {creditsArrayToString (playwrightArray)}
          </p>)
          :
          (<p className={cn(styles.smalltext,styles.creditsEntry)}>
        Драматург: {playwrightArray}
          </p>)
      }
      {
        directorArray.length > 1 ?
          (<p className={cn(styles.smalltext,styles.creditsEntry)}>
        Режиссёры: {creditsArrayToString (directorArray)}
          </p>)
          :
          (<p className={cn(styles.smalltext,styles.creditsEntry)}>
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
          <p className={cn(styles.bodyText, styles.date)}>{date}</p>
          <p className={cn(styles.bodyText, styles.timeEvents)}>{time}</p>
        </div>
        <h5 className={cn(styles.h5,styles.title)}>{title}</h5>
        <div className={cn(styles.credits)}>
          {creditsRendered}
        </div>
        <p className={cn(styles.caption, styles.description)}>читка проекта Любимовка.Ещё</p>
        {buttonLinks.length === 2 &&
          <div className={cn(styles.buttonEventsContainer, styles.buttonEventsContainerTwoLinks)}>
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
          <div className={cn(styles.buttonEventsContainer, styles.buttonEventsContainerOneLink)}>
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
          <div className={cn(styles.infoFestival)}>
            <h6 className={cn(styles.h6, styles.timeFestival)}>{time}</h6>
            <p className={cn(styles.smalltext, styles.location)}>{location}</p>
          </div>
          <div className={cn(styles.infoPlay)}>
            <h6 className={cn(styles.h6,styles.titleFestival)}>{title}</h6>
            <p className={cn(styles.smalltext, styles.synopsis)}>{synopsis}</p>
          </div>
        </>
        )
        : (
          <>
            <div className={cn(styles.coverFestivalVoid)} ></div>
            <div className={cn(styles.infoFestival, styles.infoFestivalVoid)}>
              <h6 className={cn(styles.h6, styles.timeFestival)}>{time}</h6>
              <p className={cn(styles.smalltext, styles.location)}>{location}</p>
            </div>
            <div className={cn(styles.infoPlay)}>
              <h6 className={cn(styles.h6,styles.titleFestival, styles.titleFestivalVoid)}>{title}</h6>
              <p className={cn(styles.smalltext, styles.synopsis)}>{synopsis}</p>
            </div>
          </>
        )
      }
      {/* <div className={cn(styles.infoFestival)}>
        <h6 className={cn(styles.h6, styles.timeFestival)}>{time}</h6>
        <p className={cn(styles.smalltext, styles.location)}>{location}</p>
      </div>
      <div className={cn(styles.infoPlay)}>
        <h6 className={cn(styles.h6,styles.titleFestival)}>{title}</h6>
        <p className={cn(styles.smalltext, styles.synopsis)}>{synopsis}</p>
      </div> */}
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
          ) : (<div className={cn(styles.buttonFestivalContainer, styles.buttonFestivalContainerVoid)}></div>)
      }
    </li>
  );
};
