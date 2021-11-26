import { ChangeEvent, InputHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './text-input.module.css';
const cx = classNames.bind(styles);

interface ITextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  errorText?: string;
  onChange?: (value: string) => void;
}

const TextInput = (props: ITextInputProps): JSX.Element => {
  const {
    errorText,
    onChange,
    ...restProps
  } = props;

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    onChange(value);
  };

  return (
    <>
      <input
        type="text"
        className={cx('input', { invalid: !!errorText })}
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

export default TextInput;
