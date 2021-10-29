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
    <dl className={cx('dl-class')}>
      <dt className={cx('dt-class')}>Драматург</dt>
      <dd className={cx('dd-class')}>{playwrighter}</dd>
      <dt className={cx('dt-class')}>Перевод</dt>
      <dd className={cx('dd-class')}>{translator }</dd>
      <dt className={cx('dt-class')}>Адаптация текста</dt>
      <dd className={cx('dd-class')}>{textAdaptation}</dd>
      <dt className={cx('dt-class')}>Режиссёр</dt>
      <dd className={cx('dd-class')}>{director}</dd>
      <dt className={cx('dt-class')}>Актёры</dt>
      <dd className={cx('dd-class')}>{actorsString}</dd>
    </dl>
  );
};
