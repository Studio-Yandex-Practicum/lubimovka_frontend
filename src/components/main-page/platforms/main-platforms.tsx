import { FC } from 'react';
import classNames from 'classnames/bind';

import { MainPlaces, Place } from 'api-typings';
import { Icon } from 'components/ui/icon';
import { InfoLink } from 'components/ui/info-link';

import styles from './main-platforms.module.css';

const cx = classNames.bind(styles);

export const MainPlatforms: FC<MainPlaces> = ({ items }) => (
  <section className={cx('section')}>
    <h2 className={cx('titleMain')}>
      Площадки
    </h2>

    <ul className={cx('list')}>
      {items.map((card: Place) => (
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
          <InfoLink
            isOutsideLink
            label={card.address}
            icon="arrow-right"
            iconPlace="right"
            size="m"
            className={cx('link')}
            href={card.map_link}
          />
        </li>
      ))}
    </ul>
  </section>
);
