import classNames from 'classnames/bind';

import styles from './form-field.module.css';

interface IFormFieldProps {
  children: React.ReactNode;
}

const cx = classNames.bind(styles);

export const FormField = (props: IFormFieldProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('field')}>
      {children}
    </div>
  );
};
