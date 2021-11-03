import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './creators-list.module.css';
const cx = classNames.bind(styles);

export interface ICreatorsListProps {
  playwrighter: string;
  translator: string;
  textAdaptation: string;
  director: string;
  actors: Array<string>;
}

export const CreatorsList: FC<ICreatorsListProps> = (props) => {
  const { playwrighter, translator, textAdaptation, director, actors } = props;

  const actorsString = actors.join(', ');

  return (
    <dl className={cx('creatorList')}>
      <dt className={cx('title')}>Драматург</dt>
      <dd className={cx('description')}>{playwrighter}</dd>
      <dt className={cx('title')}>Перевод</dt>
      <dd className={cx('description')}>{translator }</dd>
      <dt className={cx('title')}>Адаптация текста</dt>
      <dd className={cx('description')}>{textAdaptation}</dd>
      <dt className={cx('title')}>Режиссёр</dt>
      <dd className={cx('description')}>{director}</dd>
      <dt className={cx('title')}>Актёры</dt>
      <dd className={cx('description')}>{actorsString}</dd>
    </dl>
  );
};
