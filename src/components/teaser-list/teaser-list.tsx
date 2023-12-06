import classNames from 'classnames/bind';

import { TeaserCard } from 'components/teaser-card/teaser-card';

import type { Banner } from '__generated__/api-typings';
import type { FC } from 'react';

import styles from './teaser-list.module.css';

interface TeaserListProps {
  // TODO: не использовать тип ответа API
  items: Banner[]
}

const cx = classNames.bind(styles);

export const TeaserList: FC<TeaserListProps> = ({ items }) => (
  <ul className={cx('root')}>
    {items.map(({
      id,
      title,
      description,
      url,
      image,
      button,
    }) => (
      <li className={cx('item')} key={id}>
        <TeaserCard
          title={title}
          description={description}
          url={url}
          actionText={button}
          image={image}
        />
      </li>
    ))}
  </ul>
);
