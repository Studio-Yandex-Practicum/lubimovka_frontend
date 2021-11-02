import classNames from 'classnames/bind';

import styles from './form-fieldset.module.css';
const cx = classNames.bind(styles);

interface IFormFieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  children: React.ReactNode;
}

const FormFieldset = (props: IFormFieldsetProps): JSX.Element => {
  const { legend, children } = props;

  return (
    <fieldset className={cx('fieldset')}>
      <legend className={cx('legend')}>{legend}</legend>
      <div className={cx('container')}>
        {children}
      </div>
    </fieldset>
  );
};

export default FormFieldset;
