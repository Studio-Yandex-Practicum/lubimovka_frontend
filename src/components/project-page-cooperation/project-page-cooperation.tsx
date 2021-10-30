import {FC, HTMLAttributes} from 'react';
import classNames from 'classnames/bind';
import styles from './project-page-cooperation.module.css';
import { Email } from 'shared/types/common';

const cx = classNames.bind(styles);

interface IOpenToCoopProps extends HTMLAttributes<HTMLElement> {
  email: Email;
}

export const OpenToCooperation: FC<IOpenToCoopProps> = (props) => {
  const { email } = props;

  return (
    <div className={cx('container')}>
      <div className={cx('asterisk')}></div>
      <h5 className={cx('header')}>Проект открыт к&nbsp;сотрудничеству</h5>
      <p className={cx('text')}>Мы находимся в постоянном поиске режиссёров и актеров, заинтересованных в постановке читок.</p>
      <p className={cx('text')}>Пишите на <a className={cx('link')} href={`mailto:${email}`}>{email}</a></p>
    </div>
  );
};
