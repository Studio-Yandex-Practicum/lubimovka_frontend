import classNames from 'classnames/bind';

import type { VFC } from 'react';

import styles from './credits-list.module.css';

const cx = classNames.bind(styles);

export type CreditsRole = {
  name: string
  persons: string[]
}

interface CreditsListProps {
  roles: CreditsRole[]
  size?: 's' | 'm'
  className?: string
}

export const CreditsList: VFC<CreditsListProps> = (props) => {
  const {
    roles,
    size = 'm',
    className,
  } = props;

  return (
    <dl
      className={cx(
        size,
        className,
      )}
    >
      {roles.map(({ name, persons }) => (
        <div
          className={cx('item')}
          key={name}
        >
          <dt className={cx('role')}>
            {name}
          </dt>
          <dd className={cx('persons')}>
            {persons.join(', ')}
          </dd>
        </div>
      ))}
    </dl>
  );
};
