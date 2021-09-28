import React, { FC, RefObject } from 'react';
import cn from 'classnames';

import { Icon } from '../../icon';

import styles from './input-file-container.module.css';

interface IInputFileContainerProps {
    inputRef: RefObject<HTMLInputElement>,
    file: File | null,
    cb: (file: File | null) => void,
}

export const InputFileContainer: FC<IInputFileContainerProps> = (props): JSX.Element => {
  const {
    inputRef,
    file,
    cb
  } = props;

  // Удаление файла
  const handlerDeteleFile = (): void => {
    if (inputRef.current) {
      inputRef.current.value = '';
      cb(null);
    }
  };

  return (
    <div className={ cn(styles.conteiner) }>
      <button onClick={ handlerDeteleFile } className={ cn(styles.delete) } >
        { <Icon glyph='cross' className={styles.iconDelete} fill='white' /> }
      </button>
      <p className={ cn(styles.name) }>
        { file && file.name }
      </p>
    </div>
  );
};
