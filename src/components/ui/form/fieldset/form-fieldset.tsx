import classNames from 'classnames/bind';

import styles from './form-fieldset.module.css';

interface IFormFieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  children: React.ReactNode;
}

const cx = classNames.bind(styles);

export const FormFieldset = (props: IFormFieldsetProps): JSX.Element => {
  const { legend, children } = props;

  return (
    <fieldset className={cx('fieldset')}>
      <legend className={cx('legend')}>
        {legend}
      </legend>
      <div className={cx('content')}>
        {children}
      </div>
    </fieldset>
  );
};
