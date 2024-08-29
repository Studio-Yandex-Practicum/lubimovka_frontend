import cn from 'classnames';

import { Icon } from 'components/ui/icon';
import { isNonEmpty } from 'shared/helpers/is-non-empty';

import { HistoryTitleCard, ICard } from './history-title-card';
import { HistoryTitleLink, ILink } from './history-title-link';

import type { Festival } from '__generated__/api-typings';

import style from './history-title.module.css';

interface IHistoryTitle {
  data: Festival
  currentYear: number
  showVolunteers: boolean
}

// TODO: TT заменить на локальное изображение
const imageUrl = 'https://s1.hostingkartinok.com/uploads/images/2021/12/fb0c8e1baf21b0ca306ee98a6678c0d8.png';

export const HistoryTitle: React.FC<IHistoryTitle> = ({ data, currentYear, showVolunteers }) => {
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
  const formatDate = (date: string) => new Date(date).toLocaleDateString('ru-Ru', {
    timeZone: 'Europe/Moscow',
    month: 'long',
    day: 'numeric'
  });

  const startDate = formatDate(start_date);
  const finishDate = formatDate(end_date);

  const urlVolonters = `/about-us/team/?year=${currentYear}`;

  const cards: {[p:string]: ICard} = {
    plays_count: {
      count: plays_count,
      title: 'пьес прислали на конкурс'
    },
    selected_plays_count: {
      count: selected_plays_count,
      title: 'пьес прозвучало на фестивале'
    },
    selectors_count: {
      count: selectors_count,
      title: 'отборщиков читали пьесы'
    },
    volunteers_count: {
      count: volunteers_count,
      title: 'волонтёров работали на фестивале',
      buttonProps: showVolunteers ? {
        href: urlVolonters,
        iconPosition: 'right',
        icon: <Icon
          glyph="arrow-right"
          width="100%"
          height="100%"
        />
      } : undefined
    },
    events_count: {
      count: events_count,
      title: 'событий прошло в образовательной программе'
    },
    cities_count: {
      count: cities_count,
      title: 'число городов, откуда приехали авторы'
    }
  };

  const links: {[p:string]: ILink} = {
    plays_links: {
      title: 'Пьесы',
      linkList: plays_links
    },
    additional_links: {
      title: 'Дополнительно',
      linkList: additional_links
    }
  };

  return (
    <section className={style.section}>
      <img src={festival_image ||imageUrl} alt="Изображение" className={style.image}/>
      <div className={style.content}>
        <h2 className={cn(style.dataSubtitle)}>
          {`${startDate} - ${finishDate}`}
        </h2>
        <p className={cn(style.datatext)}>
          {description}
        </p>
        <div className={cn(style.gridcontent)}>
          {Object.keys(cards).map(cardKey => <HistoryTitleCard key={cardKey} item={cards[cardKey]}/>)}
        </div>
        <div className={style.links}>
          {Object.keys(links).map(linkKey => {
            return isNonEmpty(links[linkKey].linkList) && <HistoryTitleLink key={linkKey} item={links[linkKey]}/>;
          })}
        </div>
      </div>
    </section>
  );
};
