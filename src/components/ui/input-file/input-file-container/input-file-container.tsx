import React, { FC, SetStateAction } from 'react';
import cn from 'classnames';

import { Icon } from '../../icon';

import styles from './input-file-container.module.css';

interface IInputFileContainer {
    setFile: React.Dispatch<SetStateAction<null | File>>,
    setNameFile: React.Dispatch<SetStateAction<string>>,
    input: HTMLInputElement | null,
    nameFile: string,
}

export const InputFileContainer: FC<IInputFileContainer> = (props): JSX.Element => {
  const {
    setFile,
    setNameFile,
    input,
    nameFile
  } = props;

  // Удаляю файл при нажатии на крестик
  const fileOnDelete = (input: HTMLInputElement): void => {
    // Удаляю с тэга
    input.value = '';
    // Файл удаляю для отправки на сервер
    setFile(null);
    setNameFile('');
  };

  // Удаление файла
  const handlerDeteleFile = (): void => {
    if (input) {
      fileOnDelete(input);
    }
  };

  return (
    <div className={ cn(styles.conteiner) }>
      <button onClick={ handlerDeteleFile } className={ cn(styles.delete) } >
        {
          <Icon glyph='cross' className={styles.iconDelete} fill='white' />
        }
      </button>
      <p className={ cn(styles.name) }>
        { nameFile }
      </p>
    </div>
  );
};
