import {FC, InputHTMLAttributes, TextareaHTMLAttributes} from 'react';
import cn from 'classnames';
import styles from './text-field.module.css';

// ------ input ------
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  formNoValidate?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const {...restProps} = props;

  return (
    <div className={cn(styles.textFieldComponent)}>
      <input className={cn(styles.textField)} {...restProps} />
      <span className='error'>{props.formNoValidate}</span>
    </div>
  );
};

// ------ textarea ------
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  formNoValidate?: boolean;
}

export const TextArea: FC<TextAreaProps> = (props) => {
  const {...restProps} = props;

  return (
    <div className={cn(styles.textFieldComponent)}>
      <textarea className={cn(styles.textField)} {...restProps} />
      <span className='error'>{props.formNoValidate}</span>
    </div>
  );
};
