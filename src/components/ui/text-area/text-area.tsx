import classNames from 'classnames/bind';

import type { InputHTMLAttributes } from 'react';

import styles from './text-area.module.css';

const cx = classNames.bind(styles);

interface ITextAreaProps extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  errorText?: string
  minWidth?: string
  maxWidth?: string
  minHeight?: string
  maxHeight?: string
  onChange?: (value: string) => void
  rows?: number
}

const TextArea = (props: ITextAreaProps): JSX.Element => {
  const {
    errorText,
    onChange,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    ...restProps
  } = props;

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!onChange) {
      return;
    }

    onChange(value);
  };

  return (
    <>
      <textarea
        className={cx('input', { invalid: !!errorText })}
        style={{ minWidth, maxWidth, minHeight, maxHeight }}
        onChange={handleChange}
        {...restProps}
      />
      {errorText && (
        <p className={cx('error')}>
          {errorText}
        </p>
      )}
    </>
  );
};

export default TextArea;
