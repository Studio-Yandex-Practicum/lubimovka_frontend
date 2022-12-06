import React, { FC } from 'react';
import cn from 'classnames';

import { Button } from 'components/ui/button/button';
import { Festival } from 'api-typings';

import style from './history-title.module.css';

interface IHistoryTitle {
  data: Festival,
  currentYear: number,
}

const iconPlace = 'right';
const icon = 'arrow-right';
const alignStart = 'start';
const imageUrl = 'https://s1.hostingkartinok.com/uploads/images/2021/12/fb0c8e1baf21b0ca306ee98a6678c0d8.png';

export const HistoryTitle: FC<IHistoryTitle> = ({ data, currentYear }) => {
  const {
    plays_count,
    selected_plays_count,
    selectors_count,
    volunteers_count,
    events_count,
    cities_count,
    start_date,
    end_date,
    festival_image,
    plays_links,
    additional_links,
    description
  } = data;
  const startDate = new Date(start_date).toLocaleDateString('ru-Ru', {
    timeZone: 'Europe/Moscow',
    month: 'long',
    day: 'numeric'
  });
  const finishDate = new Date(end_date).toLocaleDateString('ru-Ru', {
    timeZone: 'Europe/Moscow',
    month: 'long',
    day: 'numeric'
  });
  const [urlVolonters, setUrlVolonters] = React.useState(`/about-us/team/?year=${currentYear}`);
  React.useEffect(() => {
    setUrlVolonters(`/about-us/team/?year=${currentYear}`);
  }, [currentYear]);
  return (
    <section className={style.section}>
      <img src={festival_image ||imageUrl} alt="Изображение" className={style.image}/>
      <div className={style.content}>
        <h2 className={cn(style.dataSubtitle)}>
          {startDate}
          {' '}
          -
          {' '}
          {finishDate}
        </h2>
        <p className={cn(style.datatext)}>
          {description}
        </p>
        <div className={cn(style.gridcontent)}>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={plays_count ? plays_count.toString() : ''}
                align={alignStart}
                size="l"
                gap="8px"
                className={cn(style.button, style.link, style.title)}
              />
            </div>
            <p className={cn(style.element)}>
              пьес прислали на конкурс
            </p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={selected_plays_count ? selected_plays_count.toString() : ''}
                align={alignStart}
                size="l"
                gap="8px"
                className={cn(style.button, style.link, style.title)}
              />
            </div>
            <p className={cn(style.element)}>
              пьес прошли отбор
            </p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={selectors_count ? selectors_count.toString() : ''}
                iconPlace={iconPlace}
                icon={icon}
                href="#"
                isLink
                align={alignStart}
                size="l"
                gap="8px"
                className={cn(style.button, style.link, style.title)}
              />
            </div>
            <p className={cn(style.element)}>
              отборщиков читали пьесы
            </p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={volunteers_count ? volunteers_count.toString() : ''}
                iconPlace={iconPlace}
                icon={icon}
                href={urlVolonters}
                isLink
                align={alignStart}
                size="l"
                gap="8px"
                className={cn(style.button, style.link, style.title)}
              />
            </div>
            <p className={cn(style.element)}>
              волонтёров работали на фестивале
            </p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={events_count ? events_count.toString() : ''}
                align={alignStart}
                size="l"
                gap="8px"
                className={cn(style.button, style.link, style.title)}
              />
            </div>
            <p className={cn(style.element)}>
              событий прошло в образовательной программе
            </p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={cities_count ? cities_count.toString() : ''}
                align={alignStart}
                size="l"
                gap="8px"
                className={cn(style.button, style.link, style.title)}
              />
            </div>
            <p className={cn(style.element)}>
              число городов, откуда приехали авторы
            </p>
          </div>
        </div>
        <div className={style.links}>
          {plays_links.length > 0 && (
            <div className={style.subsection}>
              <h2 className={style.subtitle}>
                Пьесы
              </h2>
              {plays_links.map(({ title, link }) => (
                <div className={style.buttonDisplay} key={title}>
                  <Button
                    label={title}
                    iconPlace={iconPlace}
                    icon={icon}
                    href={link}
                    isLink
                    align={alignStart}
                    size="l"
                    gap="8px"
                    className={cn(style.button, style.link, style.subtitle)}
                  />
                </div>
              ))}
            </div>
          )}
          {additional_links.length > 0 && (
            <div className={style.subsection}>
              <h2 className={style.subtitle}>
                Дополнительно
              </h2>

              {additional_links.map(({ title, link }) => (
                <div className={style.buttonDisplay} key={title}>
                  <Button
                    label={title}
                    iconPlace={iconPlace}
                    icon={icon}
                    href={link}
                    isLink
                    align={alignStart}
                    size="l"
                    gap="8px"
                    className={cn(style.button, style.link, style.subtitle)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

