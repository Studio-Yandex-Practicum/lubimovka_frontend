import React, { FC, useCallback } from 'react';
import cn from 'classnames';

import { Icon } from '../../icon';

import styles from './container-button.module.css';

interface IContainerButtonProps {
  cb: () => void
  activeDropdown: boolean
  value: string | number
}

export const ContainerButton: FC<IContainerButtonProps> = ({ cb, activeDropdown, value }) => {
  const clickActiveDropdown = useCallback((): void => cb(), [ cb ]);

  return (
    <div className={ cn(styles.container, {
      [styles.dark]: activeDropdown,
    })}
    onClick={ clickActiveDropdown }>
      <p className={ cn(styles.text) }>
        { value }
      </p>
      { <Icon glyph='arrow-down' 
        fill={activeDropdown ? 'white' : 'black'} 
        className={ styles.iconArrowDown } /> }
    </div>
  );
};
