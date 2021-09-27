import {FC, InputHTMLAttributes} from 'react';
import cn from 'classnames';
import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  formNoValidate?: boolean;
  minLength?: number;
  maxLength?: number;
  onClick?: () => void;
}

const Input: FC<InputProps> = (props) => {
  const {...restButtonProps} = props;

  return (
    <div className={cn(styles.inputComponent)}>
      <input className={cn(styles.input)} {...restButtonProps} placeholder='Для примера' required/>
      <span className='inputError'>{props.formNoValidate}</span>
    </div>
  );
};

export default Input;
