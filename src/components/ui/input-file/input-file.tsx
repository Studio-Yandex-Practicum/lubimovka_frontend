import React, { useRef, useState, useEffect, FC } from 'react';
import cn from 'classnames';

import styles from './input-file.module.css';

// Компоненты
import { InputFileContainer } from './index';
import { InputFileButton } from './index';

interface IInputFileProps {
  typesListFiles?: string[],
  cb?: (file: File) => void,
}

export const InputFile: FC<IInputFileProps> = ({ cb, typesListFiles }): JSX.Element => {
  const [ file, setFile ] = useState<null | File>(null);

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

  // Добавляю текст к сообщению ою ошибке
  useEffect(() => {
    nameFile ? 
      setMessageError(file ? '' : 'Файл содержит кириллицу, пожалуйста, переименуйте его.') : 
      setMessageError('');
  }, [ file, nameFile ]);

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
      {
        <InputFileButton 
          inputRef={ inputRef } 
          nameFile={ nameFile } 
          setFile={ setFile } 
          setNameFile={ setNameFile } 
        />
      }
    </div>
  );
};
