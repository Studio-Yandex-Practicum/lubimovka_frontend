import {FC, InputHTMLAttributes} from 'react';
import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  default?: string;
  name: string;
  type: string;
  placeholder: string;
  formNoValidate?: boolean | undefined;
  label: string;
  minLength: number;
  maxLength: number;
  onClick?: () => void;
}

const Input: FC<InputProps> = (props) => {
  return (
    <div className={styles.inputComponent}>
      <label className="input"/>
      <input onClick={props.onClick} name={props.name} type={props.type} placeholder={props.placeholder} minLength={props.minLength} maxLength={props.maxLength} required/>
      <span className="inputError"/>
    </div>
  );
};

export default Input;
