import {FC, InputHTMLAttributes} from 'react';
import cn from 'classnames';
import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  rows?: number;
  cols?: number;
  minLength?: number;
  maxLength?: number;
}

const TextField: FC<InputProps> = () => {
  return (
    <div className={cn(styles.inputComponent)}>
      <textarea className={cn(styles.input)}/>
    </div>
  );
};

export default TextField;
