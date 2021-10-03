import React, { useRef, useState, useEffect, useCallback, FC } from 'react';
import cn from 'classnames';

import styles from './input-file.module.css';

// Компоненты
import { InputFileContainer } from './input-file-container';
import { InputFileButton } from './input-file-button';

interface IInputFileProps {
  typesFiles?: string[],
  cb?: (file: File | null) => void,
}

export const InputFile: FC<IInputFileProps> = ({ cb, typesFiles }): JSX.Element => {
  const [ file, setFile ] = useState<null | File>(null);

  // inpyt type file
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Если есть file и cb, вызываем переданный колбек
    if (file && cb && checkFileName()) {
      cb(file);
    } else if (cb) {
      cb(null);
    }
  }, [ file ]);

  // Если передан typeFile
  useEffect(() => {
    if (inputRef.current && Array.isArray(typesFiles)) {
      const input: HTMLInputElement = inputRef.current;
      // Добавляю тип атрибута для input
      input.setAttribute('accept', typesFiles.join(','));
    }
  }, [ typesFiles ]);

  // Проверка на русские символы в имени файла
  const checkFileName = useCallback(() => {
    const isEnglishName = /^[\w]+.[\w]+$/;
    return file && isEnglishName.test(file.name) ? file : false;
  }, [ file ]);

  const cbFile = useCallback((file: File | null): void => {
    setFile(file);
  }, [ file ]);

  return (
    <div className={ cn(styles.addFile) }>
      {
        file && <InputFileContainer
          inputRef={ inputRef } 
          cb={ cbFile }
          file={ file }
        />
      }
      {
        file && !checkFileName() && (
          <p className={ cn(styles.message) }>
            Файл содержит кириллицу, пожалуйста, переименуйте его.
          </p>
        )
      }
      {
        <InputFileButton
          inputRef={ inputRef }
          cb={ cbFile }
          file={ file }
        />
      }
    </div>
  );
};
