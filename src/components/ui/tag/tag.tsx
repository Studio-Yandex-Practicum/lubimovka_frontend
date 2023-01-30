import cn from 'classnames/bind';

import { Icon } from '../icon';

import type { FC } from 'react';

import styles from './tag.module.css';

const cx = cn.bind(styles);

interface ITagProps {
  label: string;
  selected: boolean;
  isIcon?: boolean;
  cb?: (value: string, counter: number | undefined) => void;
  counter?: number
}
export const Tag: FC<ITagProps> = (props) => {
  const {
    label, selected, cb, isIcon, counter
  } = props;

  const handleClick = React.useCallback((e:React.MouseEvent) => {
    e.preventDefault();
    if (cb) {
      cb(label, counter);
    }
  },[cb, counter, label]);

  return (
    isIcon ? (
      <div className={cx('tagIcon', { active: selected })}>
        <div className={cx('tagContainer')}>
          <p className={cx('tagText', { active: selected })}>
            {label}
          </p>
          <div className={cx('icon')} onClick={handleClick}>
            <Icon glyph={'cross'}/>
          </div>
        </div>
      </div>
    ) : (
      <div className={cx('tag', { active: selected })}>
        {label}
      </div>
    )
  );
};
