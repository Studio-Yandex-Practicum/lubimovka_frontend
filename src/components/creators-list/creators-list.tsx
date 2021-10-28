import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './creators-list.module.css';
const cx = classNames.bind(styles);

export interface ICreatorsListProps {
  playwright: string;
  translation: string;
  textAdaptation: string;
  duration: string;
  actors: Array<string>;
}

export const CreatorsList: FC<ICreatorsListProps> = (props) => {
  const { playwright, translation, textAdaptation, duration, actors } = props;

  const actorsString = actors.join(', ');

  return (
    <dl className={cx('dl-class')}>
      <dt className={cx('dt-class')}>Драматург</dt>
      <dd className={cx('dd-class')}>{playwright}</dd>
      <dt className={cx('dt-class')}>Перевод</dt>
      <dd className={cx('dd-class')}>{translation}</dd>
      <dt className={cx('dt-class')}>Адаптация текста</dt>
      <dd className={cx('dd-class')}>{textAdaptation}</dd>
      <dt className={cx('dt-class')}>Режиссёр</dt>
      <dd className={cx('dd-class')}>{duration}</dd>
      <dt className={cx('dt-class')}>Актёры</dt>
      <dd className={cx('dd-class')}>{actorsString}</dd>
    </dl>
  );
};
