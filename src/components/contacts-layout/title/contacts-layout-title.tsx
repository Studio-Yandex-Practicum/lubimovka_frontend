import classNames from 'classnames/bind';

import styles from './contacts-layout-title.module.css';

const cx = classNames.bind(styles);

interface IContactsLayoutTitleProps {
  children: React.ReactNode;
}

const ContactsLayoutTitle = (props: IContactsLayoutTitleProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('title')}>
      {children}
    </div>
  );
};

export default ContactsLayoutTitle;
