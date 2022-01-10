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
  team?: TeamEntry[];
  description?: string;
  buttonLink: string;
  imageUrl?: string;
  projectText?: string | null;
  paid?: boolean;
  className?: string;
}

type TeamEntry = {
  name: string;
  persons: string [];
}

export const AnnouncedPlayCard: FC<IAnnouncedPlayCardProps> = (props) => {
  const {
    isPerformance,
    id,
    date,
    title,
    team,
    description,
    buttonLink,
    imageUrl,
    projectText,
    className,
    paid,
  } = props;

  const creditsArrayToString = (array: string []) => {
    const string = array.join(', ').replace(/, ([^,]*)$/, ' и\xa0\$1');
    return string;
  };

  const creditsRendered = (
    <React.Fragment>
      {team &&
      team.map((i, idx) => <p className={cx('creditsEntry')} key={idx}>
        {i.name}: {creditsArrayToString(i.persons)}
      </p>
      )
      }
    </React.Fragment>
  );

  return (
    <article className={cx('card', className)}>
      {imageUrl &&
        <div className={cx('cover')}>
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover"/>
        </div>
      }
      <div className={cx('info')}>
        <div className={cx('dateInfo', !imageUrl && 'dateInfoNoCover')}>
          <time dateTime={date} className={cx('date')}>{new Date(date).toLocaleDateString('ru-Ru', { timeZone: 'Europe/Moscow', month: 'long', day:'numeric' })}</time>
          <time dateTime={date} className={cx('date')}>{new Date(date).toLocaleTimeString('ru-Ru', { timeZone: 'Europe/Moscow', hour:'numeric', minute:'numeric' })}</time>
        </div>
        <h3 className={cx('title')}>{title}</h3>
        {team &&
          <div className={cx('credits', description && 'creditsDescriptionExists')}>
            {creditsRendered}
          </div>
        }
        {description &&
        <div className={cx('description', imageUrl && 'descriptionCoverExists')}>
          {description}
        </div>
        }
        {projectText !== null &&
        <p className={cx('projectText', imageUrl && 'projectTextCoverExists')}>
          {projectText}
        </p>
        }
        <div className={cx('buttonContainer', imageUrl ? 'buttonContainerCoverExists' : 'buttonNoCover')}>
          <Button
            view="primary"
            className={cx('button')}
            align="start"
            gap="9px"
            size="s"
            iconPlace="left"
            icon="arrow-right"
            label={isPerformance ? 'О спектакле' : 'Регистрация'}
            border="bottomLeft"
            isLink
            href={isPerformance ? `/performances/${id}` : buttonLink}
          />
          {paid && isPerformance &&
          <Button
            view="primary"
            className={cx('button')}
            align="start"
            gap="9px"
            size="s"
            iconPlace="left"
            icon="arrow-right"
            label="Билеты"
            border="bottomLeft"
            isLink
            href={buttonLink}
          />
          }
        </div>
      </div>
    </article>
  );
};
