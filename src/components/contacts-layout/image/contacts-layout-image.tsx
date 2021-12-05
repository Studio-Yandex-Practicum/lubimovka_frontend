import classNames from 'classnames/bind';

import styles from './contacts-layout-image.module.css';

const cx = classNames.bind(styles);

interface IContactsLayoutImageProps {
  children: React.ReactNode;
}

const ContactsLayoutImage = (props: IContactsLayoutImageProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('image')}>
      {children}
    </div>
  );
};

export default ContactsLayoutImage;
