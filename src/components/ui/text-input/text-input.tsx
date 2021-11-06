import classNames from 'classnames/bind';

import styles from './text-input.module.css';
const cx = classNames.bind(styles);

interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ariaLabel: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: ITextInputProps): JSX.Element => {
  const {
    ariaLabel,
    errorMessage = '',
    onChange,
    ...restProps
  } = props;

  return (
    <>
      <input
        className={cx('textInput', { error: errorMessage })}
        aria-label={ariaLabel}
        onChange={onChange}
        {...restProps}
      />
      {errorMessage && <span className={cx('errorMessage')}>{errorMessage}</span>}
    </>
  );
};

export default TextInput;
