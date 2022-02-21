import classNames from 'classnames/bind';

import ContactsLayoutTitle from './title';
import ContactsLayoutForm from './form';
import { ContactsLayoutColumn } from './column';
import { ContactsLayoutCallToEmail } from './call-to-email';

import styles from './contacts-layout.module.css';

const cx = classNames.bind(styles);

interface IContactsLayoutProps {
  children: React.ReactNode;
}

const ContactsLayout = (props: IContactsLayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <main className={cx('layout')}>
      {children}
    </main>
  );
};

ContactsLayout.Title = ContactsLayoutTitle;
ContactsLayout.Form = ContactsLayoutForm;
ContactsLayout.CallToEmail = ContactsLayoutCallToEmail;
ContactsLayout.Column = ContactsLayoutColumn;

export default ContactsLayout;
