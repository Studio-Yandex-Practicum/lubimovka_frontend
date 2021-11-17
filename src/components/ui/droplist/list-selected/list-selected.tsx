import React, { FC } from 'react';
import cn from 'classnames';

import { Tag } from 'components/ui/tag';

import styles from './list-selected.module.css';

interface IListSelectedProps {
  selectList: string[]
  cb: (value: string) => void
}

export const ListSelected: FC<IListSelectedProps> = ({ selectList, cb }): JSX.Element => {
  return (
    <div className={ cn(styles.container) }>
      <ul className={ cn(styles.list) }>
        { selectList.map((item, i) => (
          <Tag label={item} key={i} selected={true} isIcon={true} cb={cb} />
        ))}
      </ul>
    </div>
  );
};
