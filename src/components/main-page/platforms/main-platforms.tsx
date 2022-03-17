import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import { MainPlaces } from 'api-typings';
import { Icon } from 'components/ui/icon';

import styles from './main-platforms.module.css';

const cx = classNames.bind(styles);

export const MainPlatforms: FC<MainPlaces> = ({ items }) => (
  <section className={cx('section')}>
    <h2 className={cx('titleMain')}>
      Площадки
    </h2>

    <ul className={cx('list')}>
      {items.map(card => (
        <li className={cx('item')} key={card.id}>
          <Icon
            className={cx('mapIcon')}
            glyph="map"
          />
          <h3 className={cx('title')}>
            {card.name}
          </h3>
          <p className={cx('desc')}>
            {card.description}
          </p>
          <Link href={card.map_link}>
            <a className={cx('link')}>
              <p className={cx('text')}>
                {card.address}
              </p>
              <Icon
                glyph={'arrow-right'}
                fill={'black'}
                className={cx('icon')}
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);
