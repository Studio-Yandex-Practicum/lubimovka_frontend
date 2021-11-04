import classNames from 'classnames/bind';

import styles from './contacts-title.module.css';
const cx = classNames.bind(styles);

interface IContactsTitleProps {
  id: string;
}

const ContactsTitle = (props: IContactsTitleProps): JSX.Element => {
  const { id } = props;

  return (
    <h1 id={id} className={cx('title')}>
        Если вам есть, чем поделиться или хотите задать вопрос
    </h1>
  );
};

export default ContactsTitle;
