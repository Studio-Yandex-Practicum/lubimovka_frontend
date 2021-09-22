import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import ButtonIconInternal from './images/arrow-internal.svg';

import styles from './announced-play-card.module.css';

interface IAnnouncedPlayCardProps {
  festival: boolean;
  date?: string;
  time: string;
  location?: string;
  title: string;
  synopsis?: string;
  playwright: string;
  director: string;
  buttonData: [{
    buttonName: string;
    buttonLink: string;
  }];
  coverResourceUrl: string;
}

export const AnnouncedPlayCard: FC<IAnnouncedPlayCardProps> = (props) => {
  const {
    festival,
    date,
    time,
    location,
    title,
    synopsis,
    playwright,
    director,
    buttonData,
    coverResourceUrl,
    ...restAnnouncedPlayCardProps
  } = props;

  const playwrightArray = playwright.split(',');
  const playwrightFinal = playwrightArray[playwrightArray.length - 1];
  const directorArray = director.split(',');
  const directorArrayFinal = directorArray[directorArray.length - 1];

  return !festival ? (
    <li
      className={cn(styles.cardEvents)}
      {...restAnnouncedPlayCardProps}
    >
      <div className={cn(styles.coverEvents)}>
        <img className={cn(styles.coverEvents)} src={coverResourceUrl}></img>
      </div>
      <div className={cn(styles.infoEvents)}>
        <div className={cn(styles.dateInfo)}>
          <p className={cn(styles.bodyText, styles.date)}>{date}</p>
          <p className={cn(styles.bodyText, styles.timeEvents)}>{time}</p>
        </div>
        <div className={cn(styles.h5,styles.title)}>{title}</div>
        <div className={cn(styles.credits)}>
          {
            playwrightArray.length > 1 ?
              (<p className={cn(styles.smalltext,styles.creditsEntry)}>
                Драматурги: {playwrightArray.slice(0, -1).join(', ')} и {playwrightFinal}
              </p>)
              :
              (<p className={cn(styles.smalltext,styles.creditsEntry)}>
                Драматург: {playwright}
              </p>)
          }
          {
            directorArray.length > 1 ?
              (<p className={cn(styles.smalltext,styles.creditsEntry)}>
                Режиссёры: {directorArray.slice(0, -1).join(', ')} и {directorArrayFinal}
              </p>)
              :
              (<p className={cn(styles.smalltext,styles.creditsEntry)}>
                Режиссёр: {director}
              </p>)
          }
        </div>
        <p className={cn(styles.caption, styles.description)}>читка проекта Любимовка.Ещё</p>
        {
          buttonData.map((i) => {
            return <Link key={i} href={i.buttonLink}>
              <button className={cn(styles.button,styles.buttonEvents)}>
                <ButtonIconInternal className={cn(styles.buttonIcon)} alt="Иконка кнопки"/>
                <p className={cn(styles.buttonName, styles.smalltext)}>{i.buttonName.toUpperCase()}</p>
              </button>
            </Link>;
          })
        }
      </div>
    </li>
  ) : (
    <li
      className={cn(styles.cardFestival)}
      {...restAnnouncedPlayCardProps}
    >
      <div className={cn(styles.coverFestival)}>
        <img className={cn(styles.coverFestival)} src={coverResourceUrl}></img>
      </div>
      <div className={cn(styles.infoFestival)}>
        <p className={cn(styles.h6, styles.timeFestival)}>{time}</p>
        <p className={cn(styles.smalltext, styles.location)}>{location}</p>
      </div>
      <div className={cn(styles.infoPlay)}>
        <div className={cn(styles.h6,styles.titleFestival)}>{title}</div>
        <p className={cn(styles.smalltext, styles.synopsis)}>{synopsis}</p>
      </div>
      <div className={cn(styles.creditsFestival)}>
        {
          playwrightArray.length > 1 ?
            (<p className={cn(styles.smalltext,styles.creditsEntry)}>
              Драматурги: {playwrightArray.slice(0, -1).join(', ')} и {playwrightFinal}
            </p>)
            :
            (<p className={cn(styles.smalltext,styles.creditsEntry)}>
              Драматург: {playwright}
            </p>)
        }
        {
          directorArray.length > 1 ?
            (<p className={cn(styles.smalltext,styles.creditsEntry)}>
              Режиссёры: {directorArray.slice(0, -1).join(', ')} и {directorArrayFinal}
            </p>)
            :
            (<p className={cn(styles.smalltext,styles.creditsEntry)}>
                Режиссёр: {director}
            </p>)
        }
      </div>
      {
        buttonData.map((i) => {
          return <Link key={i} href={i.buttonLink}>
            <button className={cn(styles.button, styles.buttonFestival)}>
              <ButtonIconInternal className={cn(styles.buttonIcon)} alt="Иконка кнопки"/>
              <p className={cn(styles.buttonName, styles.smalltext)}>{i.buttonName.toUpperCase()}</p>
            </button>
          </Link>;
        })
      }
    </li>
  );
};
