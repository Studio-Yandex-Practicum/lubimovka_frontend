import {FC, InputHTMLAttributes, TextareaHTMLAttributes} from 'react';
import cn from 'classnames';
import styles from './text-field.module.css';

// ------ input ------
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  valid?: boolean;
  errorMessage?: string;
}

export const Input: FC<InputProps> = (props) => {
  const {valid, errorMessage, ...restProps} = props;

  return (
    <div className={cn(styles.textFieldComponent)}>
      <input className={cn(styles.textField)} formNoValidate {...restProps} style={{ height: 13, ...restProps }}/>
      {!valid && errorMessage && <span className={cn(styles.error)}>{errorMessage}</span>}
    </div>
  );
};

// ------ textarea ------
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  valid?: boolean;
  errorMessage?: string;
}

export const TextArea: FC<TextAreaProps> = (props) => {
  const {valid, errorMessage, ...restProps} = props;

  return (
    <div className={cn(styles.textFieldComponent)}>
      <textarea className={cn(styles.textField)} {...restProps} style={{ height: 71, ...restProps}}/>
      {!valid && errorMessage && <span className={cn(styles.error)}>{errorMessage}</span>}
    </div>
  );
};
