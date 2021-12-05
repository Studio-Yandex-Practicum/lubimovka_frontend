import classNames from 'classnames/bind';

import styles from './contacts-layout-column.module.css';

const cx = classNames.bind(styles);

interface IContactsLayoutColumnProps {
  children: React.ReactNode;
}

const ContactsLayoutColumn = (props: IContactsLayoutColumnProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('column')}>
      {children}
    </div>
  );
};

export default ContactsLayoutColumn;
