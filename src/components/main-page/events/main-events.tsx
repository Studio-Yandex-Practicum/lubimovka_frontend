import { FC } from 'react';

import { AnnouncedPlayCard } from 'components/ui/announced-play-card';
import { MainAfisha } from 'api-typings';

import styles from './main-events.module.css';

export const MainEvents: FC<MainAfisha> = ({ items }) => {
  // const { items } = props;
  // console.log(props);

  // date_time: "2021-12-03T12:24"
  // event_body:
  // description: "Краткое описание"
  // id: 3
  // image: "/media/performances/giphy_0MikxV2.gif"
  // name: "Спектакль"
  // project: null
  // team:
  // Драматург: Array(2)
  // 0: "Ирина Копылова"
  // 1: "Агап Овчинников"
  // length: 2
  // [[Prototype]]: Array(0)
  // Режиссёр: ['Евсей Тимофеева']
  // [[Prototype]]: Object
  // [[Prototype]]: Object
  // id: 7
  // paid: false
  // place: "Москва"
  // type: "PERFORMANCE"
  // url: "https://www.youtube.com/watch?v=GsRNuncp2hM"

  return (
    <section className={styles.events}>
      <ul className={styles.content}>
        {
          items.map(item => (
            <li key={item.id} className={styles.list}>
              <AnnouncedPlayCard
                date={item.date_time}
                time={item.date_time}
                title={item.event_body.name}
                // playwrightArray={item.playwrightArray}
                // directorArray={item.event_body.description}
                eventDescription={item.event_body.description}
                buttonLinks={item.buttonLinks}
                coverResourceUrl={item.coverResourceUrl && item.coverResourceUrl}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
