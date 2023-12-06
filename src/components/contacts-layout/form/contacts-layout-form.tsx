import classNames from 'classnames/bind';

import styles from './contacts-layout-form.module.css';

const cx = classNames.bind(styles);

interface IContactsLayoutFormProps {
  children: React.ReactNode
}

const ContactsLayoutForm = (props: IContactsLayoutFormProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('form')}>
      {children}
    </div>
  );
};

export default ContactsLayoutForm;
