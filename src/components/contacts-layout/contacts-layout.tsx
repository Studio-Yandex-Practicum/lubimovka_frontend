import classNames from 'classnames/bind';

import ContactsForm from './form/contacts-layout-form';
import ContactsImage from './image/contacts-layout-image';
import ContactsAuthors from './authors/contacts-layout-authors';

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

ContactsLayout.Form = ContactsForm;
ContactsLayout.Image = ContactsImage;
ContactsLayout.Authors = ContactsAuthors;

export default ContactsLayout;
