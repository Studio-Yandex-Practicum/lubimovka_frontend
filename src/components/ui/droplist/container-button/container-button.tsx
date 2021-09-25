import React, { FC, SetStateAction } from 'react';
import cn from 'classnames';

import { Icon } from '../../icon';

import styles from './container-button.module.css';

interface IContainerButtonProps {
  setActiveDropdown: React.Dispatch<SetStateAction<boolean>>,
}

export const ContainerButton: FC<IContainerButtonProps> = ({ setActiveDropdown }) => {
  const clickActiveDropdown = (): void => {
    setActiveDropdown(state => {
      return !state;
    });
  };

  return (
    <div
      className={ cn(styles.container) }
      onClick={ clickActiveDropdown }
    >
      <p className={ cn(styles.text) }>
          Все
      </p>
      {
        <Icon glyph='arrow-down' fill='black' className={ styles.iconArrowDown } />
      }
    </div>
  );
};
