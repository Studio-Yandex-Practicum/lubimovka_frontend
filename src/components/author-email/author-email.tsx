import cn from 'classnames/bind';
import { useState } from 'react';

import { Button } from 'components/ui/button2';

import styles from './author-email.module.css';

const cx = cn.bind(styles);

interface IAuthorEmail {
  email: string
}

export const AuthorEmail: React.FC<IAuthorEmail> = (props) => {
  const { email } = props;
  const domain = email.split('@')[1];
  const [showEmail, setShowEmail] = useState(false);

  return (
    <>
      <p className={cx('email')} onClick={() => setShowEmail(!showEmail)}>
        {showEmail ? 'Скрыть E-mail для связи' : 'Показать E-mail для связи'}
      </p>
      <Button
        size="m"
        border='none'
        href={showEmail ? `mailto:${email}` : 'mailto:'}
        animation='invert'
        className={cx('overviewEmaillLink')}
      >
        {showEmail ? email : `...@${domain}`}
      </Button>
    </>
  );
};
