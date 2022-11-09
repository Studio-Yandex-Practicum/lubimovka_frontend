import { FC, useRef, ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';
import { Nullable } from 'shared/types';

import styles from './file-input.module.css';

interface IFileInputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'> {
  fileName?: string,
  errorText?: string,
  onChange?: (file: Nullable<File>) => void;
}

const cx = classNames.bind(styles);

export const FileInput: FC<IFileInputProps> = (props) => {
  const {
    fileName,
    errorText,
    onChange,
    accept,
    ...restInputProps
  } = props;
  const nativeInputRef = useRef<HTMLInputElement>(null);

  const handleChange = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
    if (!files?.length || !onChange) return;

    onChange(files[0]);
  };

  const handleClear = () => {
    if (!onChange) return;

    onChange(null);
  };

  const handleClick = () => {
    nativeInputRef.current?.click();
  };

  return (
    <>
      <input
        className={cx('input')}
        ref={nativeInputRef}
        type="file"
        onChange={handleChange}
        accept={accept}
        {...restInputProps}
      />
      {fileName && (
        <div className={cx('selected')}>
          <button
            className={cx('delete')}
            type="button"
            onClick={handleClear}
          >
            <Icon
              className={styles.icon}
              glyph="cross"
            />
          </button>
          <p className={cx('file')}>
            {fileName}
          </p>
        </div>
      )}
      {errorText && (
        <p className={cx('error')}>
          {errorText}
        </p>
      )}
      <Button
        className={cx('button')}
        size="s"
        border="bottom-left"
        icon={(
          <Icon
            glyph="plus"
            width="100%"
            height="100%"
          />
        )}
        upperCase
        iconPosition="left"
        onClick={handleClick}
      >
        {fileName ? 'Заменить файл' : 'Добавить файл'}
      </Button>
      {accept && (
        <p className={cx('note')}>
          Только файлы формата
          {' '}
          {accept}
        </p>
      )}
    </>
  );
};
