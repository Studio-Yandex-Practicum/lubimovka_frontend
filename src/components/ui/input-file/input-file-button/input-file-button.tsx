import React, { useCallback, FC, RefObject } from 'react';
import cn from 'classnames';

import styles from './input-file-button.module.css';

// Компоненты
import { Button } from 'components/ui/button';

interface IInputFileButtonProps {
  inputRef: RefObject<HTMLInputElement>,
  file: File | null,
  cb: (file: File | null) => void,
}

export const InputFileButton: FC<IInputFileButtonProps> = ({ inputRef, file, cb }): JSX.Element => {
  // Вызывает у input file его событие по умолчанию
  const fileOnClick = useCallback((): void => {
    if (inputRef.current) {
      const input: HTMLInputElement = inputRef.current;
      input.click();
    }
  }, [ inputRef ]);

  // Когда файл выбран.
  // Для ревью. Здесь нет зависимости чтобы обновлять код. Поэтому думаю что useCallback не нужен.
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input: HTMLInputElement = e.target;
    if (input.files) {
      const file: File = input.files[0];
      cb(file);
    }
  };

  return (
    <>
      <input
        type='file'
        ref={ inputRef }
        onChange={ handlerChange }
        className={ cn(styles.input) }
      />
      <Button 
        label={ file ? 'Заменить файл' : 'Добавить файл' } 
        onClick={ fileOnClick } 
        size={ 's' } 
        icon={ 'plus' } 
        iconPlace={ 'left' } 
        border={ 'bottomLeft' } 
        width={ '182px' }
        align={ 'start'}
        gap={'3px'}
      />
    </>
  );
};
