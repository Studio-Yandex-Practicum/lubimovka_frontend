import React, { FC } from 'react';
import cn from 'classnames';

import { Icon } from '../../icon';

import styles from './container-button.module.css';

interface IContainerButtonProps {
  cb: () => void,
}

export const ContainerButton: FC<IContainerButtonProps> = ({ cb }) => {
  const clickActiveDropdown = (): void => cb();

  return (
    <div
      className={ cn(styles.container) }
      onClick={ clickActiveDropdown }
    >
      <p className={ cn(styles.text) }>
        Все
      </p>
      { <Icon glyph='arrow-down' fill='black' className={ styles.iconArrowDown } /> }
    </div>
  );
};
