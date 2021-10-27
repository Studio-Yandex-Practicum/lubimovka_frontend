import classNames from 'classnames/bind';

import styles from './contacts-form-button.module.css';
const cx = classNames.bind(styles);

interface IContactsFormButtonProps {
  children: React.ReactNode;
}

export const ContactsFormButton = (props: IContactsFormButtonProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={cx('button')}>
      {children}
    </div>
  );
};
