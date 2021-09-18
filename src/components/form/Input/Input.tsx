import { FC, InputHTMLAttributes } from 'react';
import './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<InputProps> = () => {
  return (
    <form>
      <div className="inputComponent">
        <label/>
        <input className="input" name="input" type="text" placeholder="Ваше имя" minLength={2} maxLength={30} required/>
        <span className="inputError"/>
      </div>
    </form>
  );
};

export default Input;
