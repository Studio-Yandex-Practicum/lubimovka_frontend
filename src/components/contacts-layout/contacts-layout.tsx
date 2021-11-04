import classNames from 'classnames/bind';

import ContactsLayoutColumn from './column';
import ContactsLayoutTitle from './title';
import ContactsLayoutForm from './form';
import ContactsLayoutImage from './image';
import ContactsLayoutAuthors from './authors';

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

ContactsLayout.Column = ContactsLayoutColumn;
ContactsLayout.Title = ContactsLayoutTitle;
ContactsLayout.Form = ContactsLayoutForm;
ContactsLayout.Image = ContactsLayoutImage;
ContactsLayout.Authors = ContactsLayoutAuthors;

export default ContactsLayout;
