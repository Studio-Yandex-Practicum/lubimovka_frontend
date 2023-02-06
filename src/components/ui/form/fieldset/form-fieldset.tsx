import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './form-fieldset.module.css';

interface FormFieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string
}

const cx = classNames.bind(styles);

export const FormFieldset: FC<FormFieldsetProps> = (props) => {
  const { legend, children } = props;

  return (
    <fieldset className={cx('root')}>
      <legend className={cx('legend')}>
        {legend}
      </legend>
      <div className={cx('content')}>
        {children}
      </div>
    </fieldset>
  );
};
