import React, { useRef, useState, useEffect, FC, useCallback } from 'react';
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

  const checkFileName = useCallback(() => {
    if (!file) {
      return false;
    }
    const isEnglishName = /^[\w]+.[\w]+$/;

    return isEnglishName.test(file.name); 
  }, [ file ]);

  const cbButton = (file: File | null): void => {
    setFile(file);
  };

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
