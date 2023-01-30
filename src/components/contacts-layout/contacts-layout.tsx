import classNames from 'classnames/bind';

import { ContactsLayoutCallToEmail } from './call-to-email';
import { ContactsLayoutColumn } from './column';
import ContactsLayoutForm from './form';
import ContactsLayoutTitle from './title';

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
