import React, { useRef, useState, useEffect, FC, useCallback } from 'react';
import cn from 'classnames';

// import { Icon } from '../icon';

import styles from './input-file.module.css';

// Компоненты
import { Button } from '../Button/index';
import { InputFileContainer } from './index';

interface IInputFileProps {
  typesListFiles?: string[],
  cb?: (file: File) => void,
}

export const InputFile: FC<IInputFileProps> = ({ cb, typesListFiles }): JSX.Element => {
  const [ file, setFile ] = useState<null | File>(null);

  // Текст кнопки
  const [ textButton, setTextButton ] = useState('Добавить файл');
  // Имя файла для отображения
  const [ nameFile, setNameFile ] = useState('');
  // Текст для ошибки
  const [ messageError, setMessageError ] = useState('');

  // inpyt type file
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Если есть file и cb, вызываем переданный колбек
    if (file && cb) {
      cb(file);
    }
  }, [ file ]);

  const addSetAttribute = (input: HTMLInputElement): void => {
    if (typesListFiles && Array.isArray(typesListFiles) && input) {
      input.setAttribute('accept', typesListFiles.join(','));
    }
  };

  // Если передан typeFile
  useEffect(() => {
    if (inputRef.current) {
      const input: HTMLInputElement = inputRef.current;
      // Добавляю тип в атрибут input
      addSetAttribute(input);
    }
  }, [ typesListFiles ]);

  // Добавляю текст к кнопке
  useEffect(() => {
    setTextButton(nameFile ? 'Заменить файл' : 'Добавить файл');
  }, [ nameFile ]);

  // Добавляю текст к сообщению ою ошибке
  useEffect(() => {
    nameFile ? 
      setMessageError(file ? '' : 'Файл содержит кириллицу, пожалуйста, переименуйте его.') : 
      setMessageError('');
  }, [ file, nameFile ]);

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
    <div className={ cn(styles.addFile) }>
      {
        nameFile && <InputFileContainer 
          setFile={ setFile } 
          setNameFile={ setNameFile } 
          input={ inputRef.current } 
          nameFile={ nameFile } 
        />
      }
      {
        messageError && (
          <p className={ cn(styles.message) }>
            { messageError }
          </p>
        )
      }
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
    </div>
  );
};
