import classNames from 'classnames/bind';

import { ProjectCardListItem } from './item';

import type { HTMLAttributes } from 'react';

import styles from './project-card-list.module.css';

const cx = classNames.bind(styles);

export const ProjectCardList = (props: HTMLAttributes<HTMLUListElement>): JSX.Element => {
  const {
    children,
    className,
    ...restProps
  } = props;

  return (
    <ul
      className={cx(
        'list',
        className
      )}
      {...restProps}
    >
      {children}
    </ul>
  );
};

ProjectCardList.Item = ProjectCardListItem;
