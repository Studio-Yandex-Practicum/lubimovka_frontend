import React, { useRef, useState, useEffect, useCallback, FC } from 'react';
import cn from 'classnames';

import styles from './input-file.module.css';

// Компоненты
import { InputFileContainer } from './input-file-container';
import { InputFileButton } from './input-file-button';

interface IInputFileProps {
  typesListFiles?: string[],
  cb?: (file: File | null) => void,
}

export const InputFile: FC<IInputFileProps> = ({ cb, typesListFiles }): JSX.Element => {
  const [ file, setFile ] = useState<null | false | File>(false);

  // inpyt type file
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Если есть file и cb, вызываем переданный колбек
    if (file && cb && checkFileName()) {
      cb(file);
    } else if (file === null && cb) {
      cb(null);
    }
  }, [ file ]);

  // Если передан typeFile
  useEffect(() => {
    if (inputRef.current && Array.isArray(typesListFiles)) {
      const input: HTMLInputElement = inputRef.current;
      // Добавляю тип атрибута для input
      input.setAttribute('accept', typesListFiles.join(','));
    }
  }, [ typesListFiles ]);

  // Проверка на русские символы в имени файла
  const checkFileName = useCallback(() => {
    const isEnglishName = /^[\w]+.[\w]+$/;
    return file && isEnglishName.test(file.name) ? file : false;
  }, [ file ]);

  const cbButton = useCallback((file: File | null): void => {
    setFile(file);
  }, [ file ]);

  return (
    <div className={ cn(styles.addFile) }>
      {
        file && <InputFileContainer
          inputRef={ inputRef } 
          cb={ cbButton }
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
          cb={ cbButton }
          file={ file }
        />
      }
    </div>
  );
};
