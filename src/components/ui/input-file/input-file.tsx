import React, { useRef, useState, useEffect, FC } from 'react';
import cn from 'classnames';

import styles from './input-file.module.css';

interface IInputFileProps {
  typesListFiles?: string[],
}

export const InputFile: FC<IInputFileProps> = ({ typesListFiles }): JSX.Element => {
  // * Поднять Sate
  // Выбранный файл. fileList это выбранный файл
  const [ file, setFile ] = useState<null | File>(null);
  // Если existsFile false, кнопку заблокировать. Можно просто использовать file
  const [ existsValidFile, setExistsValidFile ] = useState(false);
  // *

  // Текст кнопки
  const [ textButton, setTextButton ] = useState('Добавить файл');
  // Имя файла для отображения
  const [ nameFile, setNameFile ] = useState('');
  // Текст для ошибки
  const [ messageError, setMessageError ] = useState('');

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

  // Вызывает у input file его событие по умолчанию
  const triggerInput = (): void => {
    if (inputRef.current) {
      const input: HTMLInputElement = inputRef.current;
      input.click();
    }
  };

  // Если есть файл, меняю текст кнопки
  const changeButtonText = (file: File): void => {
    if (file) {
      setTextButton('Заменить файл');
    } else {
      setTextButton('Добавить файл');
      return;
    }
  };

  const isValidFile = (isValidName: boolean, file: File): void => {
    // Если имя файла валидно
    if (isValidName) {
      // Файл заношу для отправки на сервер
      setFile(file);
      // Кнопка формы может быть доступна
      setExistsValidFile(true);
      setNameFile(file.name);
      // Убираю текст ошибки
      setMessageError('');
      return;
    }
    //Если имя файла не валидно
    // Удаляю файл
    setFile(null);
    // Кнопка формы не должна быть доступна
    setExistsValidFile(false);
    setNameFile(file.name);
    setMessageError('Файл содержит кириллицу, пожалуйста, переименуйте его.');
  };

  // Когда файл выбран
  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input: HTMLInputElement = e.target;
    if (input.files) {
      const file: File = input.files[0];
      const isEnglishName = /^[\w]+.[\w]+$/;

      changeButtonText(file);
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
    // Кнопка не должна быть активной
    setExistsValidFile(false);
    setNameFile('');
    setMessageError('');

    setTextButton('Добавить файл');
  };

  // Удаление файла
  const handlerDeteleFile = (): void => {
    if (inputRef.current) {
      const input: HTMLInputElement = inputRef.current;
      deleteFile(input);
    }
  };

  useEffect(() => {
    console.log(file, existsValidFile);
  }, [ file, existsValidFile ]);

  return (
    <div className={ cn(styles.addFile) }>
      {
        nameFile ? (
          <div className={ cn(styles.conteiner) }>
            <button
              onClick={ handlerDeteleFile }
              className={ cn(styles.delete) }
            ></button>
            <p className={ cn(styles.name) }>
              { nameFile }
            </p>
          </div>
        )
          : null
      }
      {
        messageError ? (
          <p className={ cn(styles.message) }>
            { messageError }
          </p>
        ) : null
      }
      <input
        type='file'
        ref={ inputRef }
        onChange={ handlerChange }
        className={ cn(styles.input) }
      />
      <button
        onClick={ triggerInput }
        className={ cn(styles.add) }
      >
        { textButton }
      </button>
    </div>
  );
};
