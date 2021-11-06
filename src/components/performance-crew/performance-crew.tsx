import { FC } from 'react';
import classNames from 'classnames/bind';

import { Crewman } from 'shared/types';

import styles from './performance-crew.module.css';

const cx = classNames.bind(styles);

export interface IPerformanceCrewProps {
  crew: Crewman[],
}

const getRoleTitle = (roleId: string) => ({
  adapter: 'Адаптация текста',
  dramatist: 'Драматург',
  director: 'Режиссёр',
  interpreter: 'Перевод',
}[roleId.toLocaleLowerCase()]);

export const PerformanceCrew: FC<IPerformanceCrewProps> = (props) => {
  const { crew } = props;

  const [actors, restCrew] = crew.reduce<Crewman[][]>(([a, r], crewman) => crewman.role === 'Actor' ? [[...a, crewman], r] : [a, [...r, crewman]], [[], []]);

  return (
    <dl className={cx('list')}>
      {restCrew.map(({ name, role }) => (
        <>
          <dt className={cx('title')}>
            {getRoleTitle(role)}
          </dt>
          <dd className={cx('description')}>
            {name}
          </dd>
        </>
      ))}
      <dt className={cx('title')}>
        Актёры
      </dt>
      <dd className={cx('description')}>
        {actors.map(({ name }) => name).join(', ')}
      </dd>
    </dl>
  );
};
