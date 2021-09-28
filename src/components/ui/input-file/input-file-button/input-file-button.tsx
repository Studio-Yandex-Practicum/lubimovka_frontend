import React, { FC, SetStateAction, useState, useEffect, useCallback, RefObject } from 'react';
import cn from 'classnames';

import styles from './input-file-button.module.css';

// Компоненты
import { Button } from '../../Button/index';

interface IInputFileButtonProps {
  inputRef: RefObject<HTMLInputElement>,
  nameFile: string,
  setFile: React.Dispatch<SetStateAction<null | File>>,
  setNameFile: React.Dispatch<SetStateAction<string>>,
}

export const InputFileButton: FC<IInputFileButtonProps> = (props): JSX.Element => {
  const { 
    inputRef,
    nameFile, 
    setFile, 
    setNameFile
  } = props;

  // Текст кнопки
  const [ textButton, setTextButton ] = useState('Добавить файл');

  // Добавляю текст к кнопке
  useEffect(() => {
    setTextButton(nameFile ? 'Заменить файл' : 'Добавить файл');
  }, [ nameFile ]);

  // Вызывает у input file его событие по умолчанию
  const fileOnClick = useCallback((): void => {
    if (inputRef.current) {
      const input: HTMLInputElement = inputRef.current;
      input.click();
    }
  }, [ inputRef ]);

  // Когда файл выбран
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input: HTMLInputElement = e.target;
    if (input.files) {
      const file: File = input.files[0];
      const isEnglishName = /^[\w]+.[\w]+$/;

      const isValidName: boolean = isEnglishName.test(file.name);
      isValidName ? setFile(file) : setFile(null);

      setNameFile(file.name);
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
        label={ textButton } 
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
