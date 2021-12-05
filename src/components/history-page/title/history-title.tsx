import { FC } from 'react';
import cn from 'classnames';

import { Button } from 'components/ui/button/button';

import style from './history-title.module.css';

interface IHistoryTitle {
  data: {
    plays_count: number,
    selected_plays_count: number,
    selectors_count: number,
    volunteers_count: number,
    events_count: number,
    cities_count: number,
    video_link: string,
    start_date: string,
    end_date: string,
    description: string
  }
}
const iconPlace = 'right';
const icon = 'arrow-right';
const alignStart = 'start';
const imageUrl = 'https://iscr.ru/images/2021/11/16/Group-28-1.png';

export const HistoryTitle: FC<IHistoryTitle>= ({ data }) => {
  const { plays_count,
    selected_plays_count,
    selectors_count,
    volunteers_count,
    events_count,
    cities_count,
    video_link,
    start_date,
    end_date,
    description } = data;

  const startDate = new Date(start_date).toLocaleDateString('ru-Ru', { timeZone: 'Europe/Moscow', month: 'long', day:'numeric' });
  const finishDate = new Date(end_date).toLocaleDateString('ru-Ru', { timeZone: 'Europe/Moscow', month: 'long', day:'numeric' });
  return (
    <section className={style.section}>
      <img src={imageUrl} alt='Изображение' className={style.image}/>
      <div className={style.content}>
        <h2 className={cn(style.dataSubtitle)}>{startDate} - {finishDate}</h2>
        <p className={cn(style.datatext)}>{description}</p>
        <div className={cn(style.gridcontent)}>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={plays_count.toString()}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.title)}>
              </Button>
            </div>
            <p className={cn(style.element)}>пьес прислали на конкурс</p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={selected_plays_count.toString()}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.title)}>
              </Button>
            </div>
            <p className={cn(style.element)}>пьес прошли отбор</p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={selectors_count.toString()}
                iconPlace={iconPlace}
                icon={icon}
                href='#'
                isLink={true}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.title)}>
              </Button>
            </div>
            <p className={cn(style.element)}>отборщиков читали пьесы</p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={volunteers_count.toString()}
                iconPlace={iconPlace}
                icon={icon}
                href='#'
                isLink={true}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.title)}>
              </Button>
            </div>
            <p className={cn(style.element)}>волонтёров работали на фестивале</p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={events_count.toString()}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.title)}>
              </Button>
            </div>
            <p className={cn(style.element)}>событий прошло в образовательной программе</p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                label={cities_count.toString()}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.title)}>
              </Button>
            </div>
            <p className={cn(style.element)}>число городов, откуда приехали авторы</p>
          </div>
        </div>
        <div className={style.links}>
          <div className={style.subsection}>
            <h2 className={style.subtitle}>Пьесы</h2>

            <div className={style.buttonDisplay}>
              <Button
                label='Шорт&#8209;лист'
                iconPlace={iconPlace}
                icon={icon}
                href='#'
                isLink={true}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.subtitle)}>
              </Button>
            </div>
            <div className={style.buttonDisplay}>
              <Button
                label='Fringe&#8209;программа'
                iconPlace={iconPlace}
                icon={icon}
                href='#'
                isLink={true}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.subtitle)}>
              </Button>
            </div>
            <div className={style.buttonDisplay}>
              <Button
                label='Особо&nbsp;отмеченные'
                iconPlace={iconPlace}
                icon={icon}
                href='#'
                isLink={true}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.subtitle)}>
              </Button>
            </div>
            <div className={style.buttonDisplay}>
              <Button
                label='Внеконкурсная&nbsp;программа'
                iconPlace={iconPlace}
                icon={icon}
                href='#'
                isLink={true}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.subtitle)}>
              </Button>
            </div>

          </div>
          <div className={style.subsection}>
            <h2 className={style.subtitle}>Дополнительно</h2>
            <div className={style.buttonDisplay}>
              <Button
                label='Записи&nbsp;в&nbsp;блоге'
                iconPlace={iconPlace}
                icon={icon}
                href='#'
                isLink={true}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.subtitle)}>
              </Button>
            </div>
            <div className={style.buttonDisplay}>
              <Button
                label='Видео&nbsp;с&nbsp;фестиваля'
                iconPlace={iconPlace}
                icon={icon}
                href={video_link}
                isLink={true}
                align={alignStart}
                size='l'
                gap='8px'
                className={cn(style.button, style.link, style.subtitle)}>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

