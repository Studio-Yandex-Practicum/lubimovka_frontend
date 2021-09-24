import { FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  formNoValidate?: boolean;
  minLength: number;
  maxLength: number;
  onClick?: () => void;
}

const Input: FC<InputProps> = (props) => {
  return (
    <div className={cn(styles.inputComponent)}>
      <label />
      <input onClick={props.onClick} className={cn(styles.input)} name={props.name} type={props.type} placeholder='Для примера' minLength={props.minLength} maxLength={props.maxLength} required/>
      <span className="inputError">{props.formNoValidate}</span>
    </div>
  );
};

export default Input;
