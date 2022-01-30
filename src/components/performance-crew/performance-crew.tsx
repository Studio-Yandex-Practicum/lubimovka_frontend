import { FC, Fragment } from 'react';
import classNames from 'classnames/bind';

import { Crewman, Persons } from 'shared/types';

import styles from './performance-crew.module.css';

const cx = classNames.bind(styles);

export interface IPerformanceCrewProps {
  crew: Crewman[],
}

const convertNamesToString = (persons: Persons) => persons.map(person => person).join(', ');

export const PerformanceCrew: FC<IPerformanceCrewProps> = (props) => {
  const { crew } = props;

  return (
    <dl className={cx('list')}>
      {crew.map(({ persons, name }) => (
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
