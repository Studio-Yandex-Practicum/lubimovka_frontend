import classNames from 'classnames/bind';

import styles from './contacts-form-fieldset.module.css';
const cx = classNames.bind(styles);

interface IConstactsFormFieldsetProps {
  children: React.ReactNode;
}

export const ContactsFormFieldset = (props: IConstactsFormFieldsetProps): JSX.Element => {
  const { children } = props;

  return (
    <fieldset className={cx('fieldset')}>
      {children}
    </fieldset>
  );
};
