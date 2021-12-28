import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { Icon } from 'components/ui/icon';
import { MainPlaces } from 'api-typings';

import styles from './main-platforms.module.css';

export const MainPlatforms: FC<MainPlaces> = ({ items }) => {
  return (
    <section className={cn(styles.section)}>
      <h2 className={cn(styles.titleMain)}>
        Площадки
      </h2>

      <ul className={cn(styles.list)}>
        {items.map(card => (
          <li className={cn(styles.item)} key={card.id}>
            <Icon
              className={styles.mapIcon}
              glyph='map'
            />
            <h3 className={cn(styles.title)}>
              {card.name}
            </h3>
            <p className={cn(styles.desc)}>
              {card.description}
            </p>
            <Link href={card.map_link}>
              <a className={cn(styles.link)}>
                <p className={cn(styles.text)}>
                  {card.address}
                </p>
                <span className={cn(styles.icon)}>
                  {<Icon glyph={'arrow-right'} fill={'black'}/>}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
