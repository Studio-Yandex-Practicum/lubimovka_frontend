import { FC } from 'react';
import classNames from 'classnames/bind';

import styles from './project-layout-storey.module.css';

interface IProjectLayoutStoreyProps {
  type?: 'description' | 'videos' | 'photos' | 'plays' | 'performances' | 'persons' | 'text',
}

const cx = classNames.bind(styles);

export const ProjectLayoutStorey: FC<IProjectLayoutStoreyProps> = (props) => {
  const { children, type } = props;

  return (
    <div className={cx(
      'wrapper',
      type
    )}
    >
      <div className={cx('holder')}>
        {children}
      </div>
    </div>
  );
};
