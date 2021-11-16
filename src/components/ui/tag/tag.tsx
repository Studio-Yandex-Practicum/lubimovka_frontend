import { FC } from 'react';
import {Icon} from '../icon';
import cn from 'classnames';
import styles from './tag.module.css';

interface ITagProps {
  label: string;
  selected: boolean;
  isIcon?: boolean;
  cb?: (value: string) => void;
}
interface SyntheticEvent {
  currentTarget: EventTarget;
  preventDefault(): void;
  target: EventTarget;
}
export const Tag: FC<ITagProps> = (props) => {
  const {
    label, selected, cb, isIcon
  } = props;
  function handleClick(e:SyntheticEvent) {
    e.preventDefault();
    if(cb) {
      cb(label);
    }
  }
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
