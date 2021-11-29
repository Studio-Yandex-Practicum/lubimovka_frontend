import React, { FC } from 'react';
import cn from 'classnames';

import { Icon } from '../icon';

import styles from './tag.module.css';

interface ITagProps {
  label: string;
  selected: boolean;
  isIcon?: boolean;
  cb?: (value: string) => void;
}
export const Tag: FC<ITagProps> = (props) => {
  const {
    label, selected, cb, isIcon
  } = props;
  const handleClick = React.useCallback((e:React.MouseEvent) => {
    e.preventDefault();
    if(cb) {
      cb(label);
    }
  },[cb]);
  return (
    isIcon ?
      <div className={selected ? cn(styles.tagIcon, styles.active) : cn(styles.tagIcon)}>
        <div className={cn(styles.tagContainer)}>
          <p className={selected ? cn(styles.tagText, styles.active) : cn(styles.tagText)}>{label}</p>
          <div className={cn(styles.icon)} onClick={handleClick}>
            <Icon glyph={'cross'}/>
          </div>
        </div>
      </div>
      :
      <div className={selected ? cn(styles.tag, styles.active) : cn(styles.tag)}>
        {label}
      </div>
  );
};
