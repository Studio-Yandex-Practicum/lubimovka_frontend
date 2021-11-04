import classNames from 'classnames/bind';

import styles from './form-field.module.css';
const cx = classNames.bind(styles);

interface IFormFieldProps {
  children: React.ReactNode;
}

const FormField = (props: IFormFieldProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('field')}>
      {children}
    </div>
  );
};

export default FormField;
