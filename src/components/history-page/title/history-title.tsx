import cn from 'classnames';
import { useEffect,useState } from 'react';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { isNonEmpty } from 'shared/helpers/is-non-empty';

import type { Festival } from '__generated__/api-typings';

import style from './history-title.module.css';

interface IHistoryTitle {
  data: Festival
  currentYear: number
}

const iconPlace = 'right';
const icon = 'arrow-right';
const alignStart = 'start';
// TODO: TT заменить на локальное изображение
const imageUrl = 'https://s1.hostingkartinok.com/uploads/images/2021/12/fb0c8e1baf21b0ca306ee98a6678c0d8.png';

export const HistoryTitle: React.FC<IHistoryTitle> = ({ data, currentYear }) => {
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

  const [urlVolonters, setUrlVolonters] = useState(`/about-us/team/?year=${currentYear}`);

  useEffect(() => {
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
                size='xxl'
                border='none'
                type='button'
              >
                {plays_count ? plays_count.toString() : ''}
              </Button>
            </div>
            <p className={cn(style.element)}>
              пьес прислали на конкурс
            </p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                size='xxl'
                border='none'
                type='button'
              >
                {selected_plays_count ? selected_plays_count.toString() : ''}
              </Button>
            </div>
            <p className={cn(style.element)}>
              пьес прозвучало на фестивале
            </p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                size='xxl'
                border='none'
                type='button'
                icon={(
                  <Icon
                    glyph="arrow-right"
                    width="100%"
                    height="100%"
                  />
                )}
                iconPosition='right'
              >
                {selectors_count ? selectors_count.toString() : ''}
              </Button>
            </div>
            <p className={cn(style.element)}>
              отборщиков читали пьесы
            </p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                size='xxl'
                border='none'
                href={urlVolonters}
                icon={(
                  <Icon
                    glyph="arrow-right"
                    width="100%"
                    height="100%"
                  />
                )}
                iconPosition='right'
              >
                {volunteers_count ? volunteers_count.toString() : ''}
              </Button>
            </div>
            <p className={cn(style.element)}>
              волонтёров работали на фестивале
            </p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                size='xxl'
                border='none'
                type='button'
              >
                {events_count ? events_count.toString() : ''}
              </Button>
            </div>
            <p className={cn(style.element)}>
              событий прошло в образовательной программе
            </p>
          </div>
          <div className={cn(style.card)}>
            <div className={style.buttonDisplay}>
              <Button
                size='xxl'
                border='none'
                type='button'
              >
                {cities_count ? cities_count.toString() : ''}
              </Button>
            </div>
            <p className={cn(style.element)}>
              число городов, откуда приехали авторы
            </p>
          </div>
        </div>
        <div className={style.links}>
          {isNonEmpty(plays_links) && (
            <div className={style.subsection}>
              <h2 className={style.subtitle}>
                Пьесы
              </h2>
              {plays_links.map(({ title, link }) => (
                <div className={style.buttonDisplay} key={title}>
                  <Button
                    size='s'
                    border='none'
                    href={link}
                    icon={(
                      <Icon
                        glyph="arrow-right"
                        width="100%"
                        height="100%"
                      />
                    )}
                    iconPosition='right'
                    className={cn(style.button, style.link, style.subtitle)}
                  >
                    {title}
                  </Button>
                </div>
              ))}
            </div>
          )}
          {isNonEmpty(additional_links) && (
            <div className={style.subsection}>
              <h2 className={style.subtitle}>
                Дополнительно
              </h2>
              {additional_links.map(({ title, link }) => (
                <div className={style.buttonDisplay} key={title}>
                  <Button
                    size='s'
                    border='none'
                    href={link}
                    icon={(
                      <Icon
                        glyph="arrow-right"
                        width="100%"
                        height="100%"
                      />
                    )}
                    iconPosition='right'
                    className={cn(style.button, style.link, style.subtitle)}
                  >
                    {title}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

