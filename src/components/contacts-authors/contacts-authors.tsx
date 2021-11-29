import classNames from 'classnames/bind';

import styles from './contacts-authors.module.css';

const cx = classNames.bind(styles);

interface IContactsAuthorsProps {
  email: string;
}

const ContactsAuthors = (props: IContactsAuthorsProps): JSX.Element => {
  const { email } = props;
  return (
    <address className={cx('authors')}>
      <h2 className={cx('title')}>Для авторов</h2>
      <p className={cx('paragraph')}>
        Если вы хотите внести изменения в свою страницу: добавить пьесы, ссылки
        на статьи или публикации, напишите нам. Приложите файлы и ссылки.
      </p>
      <a className={cx('email')} href={`mailto:${email}`}>
        {email}
      </a>
    </address>
  );
};

export default ContactsAuthors;
