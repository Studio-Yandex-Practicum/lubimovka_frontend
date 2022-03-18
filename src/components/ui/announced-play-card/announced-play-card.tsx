import React, { FC } from 'react';
import cn from 'classnames/bind';
import Image from 'next/image';

import { Nullable } from 'shared/types';
import { Button } from '../button';

import styles from './announced-play-card.module.css';

const cx = cn.bind(styles);

export interface IAnnouncedPlayCardProps {
  isPerformance?: boolean;
  id?: number;
  formattedDate: string;
  formattedTime: string;
  title: string;
  team?: TeamEntry[];
  description?: string;
  buttonLink: string;
  imageUrl?: string;
  project?: Nullable<string>;
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
    formattedDate,
    formattedTime,
    title,
    team,
    description,
    buttonLink,
    imageUrl,
    project,
    className,
    paid,
  } = props;

  const creditsRendered = (
    <React.Fragment>
      {team && team.map((i, idx) => (
        <p className={cx('creditsEntry')} key={idx}>
          {i.name}
          :
          {i.persons.join(', ').replace(/, ([^,]*)$/, ' и\xa0\$1')}
        </p>
      )
      )
      }
    </React.Fragment>
  );

  return (
    <article className={cx('card', className)}>
      {imageUrl && (
        <div className={cx('cover')}>
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover"/>
        </div>
      )}
      <div className={cx('info')}>
        <time className={cx('dateInfo', !imageUrl && 'dateInfoNoCover')}>
          <span className={cx('date')}>
            {formattedDate}
          </span>
          <span className={cx('date')}>
            {formattedTime}
          </span>
        </time>
        <h3 className={cx('title')}>
          {title}
        </h3>
        {team && (
          <div className={cx('credits', description && 'creditsDescriptionExists')}>
            {creditsRendered}
          </div>
        )}
        {description && (
          <div className={cx('description', imageUrl && 'descriptionCoverExists')}>
            {description}
          </div>
        )}
        {project && (
          <p className={cx('projectText', imageUrl && 'projectTextCoverExists')}>
            {project}
          </p>
        )}
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
          {paid && isPerformance && (
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
          )}
        </div>
      </div>
    </article>
  );
};
