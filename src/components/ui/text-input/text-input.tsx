import classNames from 'classnames/bind';
import { useMemo } from 'react';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';

import type { MaskGenerator } from 'react-hook-mask';

import styles from './text-input.module.css';

const cx = classNames.bind(styles);

type Mask = string | MaskGenerator

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: string
  errorText?: string
  onChange?: (value: string) => void
  inputRef?: React.RefObject<HTMLInputElement>
  mask?: Mask
}

const TextInput: React.VFC<TextInputProps> = (props) => {
  const {
    errorText,
    onChange,
    inputRef,
    mask,
    ...restProps
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }

    const {
      target: {
        value,
      }
    } = event;

    onChange(value);
  };

  const commonProps = {
    ref: inputRef,
    type: 'text',
    className: cx('input', { invalid: !!errorText }),
    ...restProps,
  };

  const maskGenerator = useMemo(() => {
    switch (typeof mask) {
    case 'string':
      return createDefaultMaskGenerator(mask);
    case 'object':
      return mask;
    default:
      return;
    }
  }, [mask]);

  return (
    <>
      {mask ? (
        <MaskedInput
          onChange={onChange}
          maskGenerator={maskGenerator}
          {...commonProps}
        />
      ) : (
        <input
          onChange={handleChange}
          {...commonProps}
        />
      )}
      {errorText && (
        <p className={cx('error')}>
          {errorText}
        </p>
      )}
    </>
  );
};

export default TextInput;
