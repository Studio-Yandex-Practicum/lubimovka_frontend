import { Fragment } from 'react';
import classNames from 'classnames/bind';

import { Crewman, Persons } from 'shared/types';

import type { FC } from 'react';

import styles from './performance-team.module.css';

const cx = classNames.bind(styles);

export interface PerformanceTeamProps {
  team: Crewman[],
  className?: string
}

const convertNamesToString = (persons: Persons) => persons.map(person => person).join(', ');

export const PerformanceTeam: FC<PerformanceTeamProps> = (props) => {
  const {
    team,
    className,
  } = props;

  return (
    <dl
      className={cx(
        'list',
        className,
      )}
    >
      {team.map(({ persons, name }) => (
        <Fragment key="role">
          <dt className={cx('title')}>
            {name}
          </dt>
          <dd className={cx('description')}>
            {convertNamesToString(persons)}
          </dd>
        </Fragment>
      ))}
    </dl>
  );
};
