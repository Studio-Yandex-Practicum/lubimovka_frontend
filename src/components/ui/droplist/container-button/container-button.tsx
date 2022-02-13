import { FC, useCallback } from 'react';
import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';

import styles from './container-button.module.css';

const cx = classNames.bind(styles);

interface IContainerButtonProps {
  cb: () => void
  activeDropdown: boolean
  value: string
}

export const ContainerButton: FC<IContainerButtonProps> = ({ cb, activeDropdown, value }): JSX.Element => {
  const clickActiveDropdown = useCallback((): void => cb(), [ cb ]);

  return (
    <div className={cx('container', {
      'dark': activeDropdown,
    })}
    onClick={clickActiveDropdown}>
      <p className={cx('text')}>
        {value}
      </p>
      <Icon glyph="arrow-down"
        fill={activeDropdown ? 'white' : 'black'} 
        className={cx('iconArrowDown', { 'rotateUp': activeDropdown })}
      />
    </div>
  );
};
