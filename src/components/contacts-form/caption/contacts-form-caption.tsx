import Link from 'next/link';
import classNames from 'classnames/bind';

import { Url } from 'shared/types';

import styles from './contacts-form-caption.module.css';
const cx = classNames.bind(styles);

interface IContactsFormCaptionProps {
  privacy: Url;
}

export const ContactsFormCaption = (props: IContactsFormCaptionProps): JSX.Element => {
  const { privacy } = props;

  return (
    <p className={cx('caption')}>
      {'Нажимая на кнопку «Отправить» вы даёте согласие '}
      <Link href={privacy}>
        <a className={cx('link')}>на обработку персональных данных </a>
      </Link>
    </p>
  );
};
