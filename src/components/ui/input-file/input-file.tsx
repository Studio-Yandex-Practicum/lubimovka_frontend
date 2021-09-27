import React, { useRef, useState, useEffect, FC, SetStateAction, useCallback } from 'react';
import cn from 'classnames';

import { Icon } from '../icon';

import styles from './input-file.module.css';

interface IInputFileProps {
  /* setFile: React.Dispatch<SetStateAction<File | null>>, */
  typesListFiles?: string[],
}

export const InputFile: FC<IInputFileProps> = ({ /* setFile, */ typesListFiles }): JSX.Element => {
  // Так должен выглядит state, который нужно поднять
  const [ file, setFile ] = useState<null | File>(null);

  // Текст кнопки
  const [ textButton, setTextButton ] = useState('Добавить файл');
  // Имя файла для отображения
  const [ nameFile, setNameFile ] = useState('');
  // Текст для ошибки
  const [ messageError, setMessageError ] = useState('');
  // Выбран ли файл
  const [ selectedFile, isSelectedFile ] = useState<boolean | null>(null);

  // inpyt type file
  const inputRef = useRef<HTMLInputElement | null>(null);

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
  }, []);

  // Добавляю текст к кнопке и имя файла
  useEffect(() => {
    setTextButton(selectedFile ? 'Заменить файл' : 'Добавить файл');
    if (inputRef.current && inputRef.current.files?.length) {
      const fileName = inputRef.current.files[0].name;
      setNameFile(fileName);
      return;
    }
    setNameFile('');
  }, [ selectedFile ]);

  // Вызывает у input file его событие по умолчанию
  const fileOnClick = useCallback((): void => {
    if (inputRef.current) {
      const input: HTMLInputElement = inputRef.current;
      input.click();
    }
  }, [ inputRef ]);

  const isValidFile = (isValidName: boolean, file: File): void => {
    const fileName = file.name;
    // Если имя файла валидно
    if (isValidName) {
      // Файл заношу для отправки на сервер
      setFile(file);
      // setNameFile(fileName);
      // Убираю текст ошибки
      setMessageError('');
      return;
    }
    //Если имя файла не валидно
    // Удаляю файл
    setFile(null);
    // setNameFile(fileName);
    setMessageError('Файл содержит кириллицу, пожалуйста, переименуйте его.');
  };

  // Когда файл выбран
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input: HTMLInputElement = e.target;
    if (input.files) {
      const file: File = input.files[0];
      const isEnglishName = /^[\w]+.[\w]+$/;

      // changeButtonText(file);
      isSelectedFile(true);
      const isValidName: boolean = isEnglishName.test(file.name);
      isValidFile(isValidName, file);
    }
  };

  // Удаляю файл при нажатии на крестик
  const deleteFile = (input: HTMLInputElement): void => {
    // Удаляю с тэга
    input.value = '';

    // Файл удаляю для отправки на сервер
    setFile(null);
    // setNameFile('');
    setMessageError('');

    isSelectedFile(false);
  };

  // Удаление файла
  const handlerDeteleFile = (): void => {
    if (inputRef.current) {
      const input: HTMLInputElement = inputRef.current;
      deleteFile(input);
    }
  };

  return (
    <div className={ cn(styles.addFile) }>
      {
        nameFile && (
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
        )
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
      <button onClick={ fileOnClick } className={ cn(styles.add) } >
        {
          <Icon glyph='plus' className={styles.iconPlus} />
        }
        { textButton }
      </button>
    </div>
  );
};
