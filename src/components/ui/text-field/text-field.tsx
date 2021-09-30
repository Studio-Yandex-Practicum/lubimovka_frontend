import {FC, InputHTMLAttributes, TextareaHTMLAttributes} from 'react';
import cn from 'classnames';
import styles from './text-field.module.css';

// ------ input ------
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  valid?: boolean;
  errorMessage?: string;
  height?: string;
  width?: string;
}

export const Input: FC<InputProps> = (props) => {
  const {width, valid, errorMessage, ...restProps} = props;

  return (
    <div className={cn(styles.textFieldComponent)} style={{ width }}>
      <input className={cn(styles.textField)} formNoValidate {...restProps} style={{ height: 13, ...restProps }}/>
      {!valid && errorMessage && <span className={cn(styles.error)}>{errorMessage}</span>}
    </div>
  );
};

// ------ textarea ------
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  valid?: boolean;
  errorMessage?: string;
  height?: string;
  width?: string;
}

export const TextArea: FC<TextAreaProps> = (props) => {
  const { width, height, valid, errorMessage, ...restProps} = props;

  return (
    <div className={cn(styles.textFieldComponent)} style={{ width }}>
      <textarea className={cn(styles.textField)} {...restProps} style={{ height, ...restProps}}/>
      {!valid && errorMessage && <span className={cn(styles.error)}>{errorMessage}</span>}
    </div>
  );
};
