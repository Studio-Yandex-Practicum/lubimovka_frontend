import {FC, InputHTMLAttributes} from 'react';
import './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<InputProps> = (props) => {
  return (
    <div className="inputComponent">
      <label/>
      <input className="input" name={props.name} type={props.type} placeholder={props.placeholder} minLength={2} maxLength={30} required/>
      <span className="inputError"/>
    </div>
  );
};

export default Input;
