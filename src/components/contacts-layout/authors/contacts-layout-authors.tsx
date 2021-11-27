import classNames from 'classnames/bind';

import styles from './contacts-layout-authors.module.css';

const cx = classNames.bind(styles);

interface IContactsLayoutAuthorsProps {
  children: React.ReactNode;
}

const ContactsLayoutAuthors = (props: IContactsLayoutAuthorsProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('authors')}>
      {children}
    </div>
  );
};

export default ContactsLayoutAuthors;
