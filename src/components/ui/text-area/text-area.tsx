import classNames from 'classnames/bind';

import styles from './text-area.module.css';
const cx = classNames.bind(styles);

interface ITextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  ariaLabel: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (props: ITextAreaProps): JSX.Element => {
  const {
    ariaLabel,
    errorMessage = '',
    onChange,
    ...restProps
  } = props;

  return (
    <>
      <textarea
        className={cx('textArea', { error: errorMessage })}
        aria-label={ariaLabel}
        onChange={onChange}
        {...restProps}
      />
      {errorMessage && <span className={cx('errorMessage')}>{errorMessage}</span>}
    </>
  );
};

export default TextArea;
