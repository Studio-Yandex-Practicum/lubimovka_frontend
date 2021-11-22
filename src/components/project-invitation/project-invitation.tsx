import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames/bind';

import { Icon } from 'components/ui/icon';
import { Email } from 'shared/types/common';

import styles from './project-invitation.module.css';

const cx = classNames.bind(styles);

interface IProjectInvitationProps extends HTMLAttributes<HTMLElement> {
  email: Email;
}

export const ProjectInvitation: FC<IProjectInvitationProps> = (props) => {
  const { email } = props;

  return (
    <div className={cx('container')}>
      <Icon glyph='asterisk' className={cx('asterisk')}/>
      <h3 className={cx('header')}>
        Проект открыт к сотрудничеству
      </h3>
      <p className={cx('text')}>
        Мы находимся в постоянном поиске режиссёров и актеров, заинтересованных в постановке читок.
      </p>
      <p className={cx('text')}>
        Пишите на
        {' '}
        <a className={cx('link')} href={`mailto:${email}`}>
          {email}
        </a>
      </p>
    </div>
  );
};
