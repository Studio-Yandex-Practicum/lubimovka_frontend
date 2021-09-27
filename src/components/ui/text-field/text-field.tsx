import {FC, InputHTMLAttributes} from 'react';
import cn from 'classnames';
import styles from '../input/input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  rows?: number;
  cols?: number;
  minLength?: number;
  maxLength?: number;
  formNoValidate?: boolean;
}

const TextField: FC<InputProps> = (props) => {
  return (
    <div className={cn(styles.inputComponent)}>
      <textarea className={cn(styles.input)} />
      <span className='inputError'>{props.formNoValidate}</span>
    </div>
  );
};

export default TextField;
