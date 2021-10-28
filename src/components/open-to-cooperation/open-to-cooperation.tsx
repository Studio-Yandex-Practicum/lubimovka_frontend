import {FC, HTMLAttributes} from 'react';
import classNames from 'classnames/bind';
import styles from './open-to-cooperation.module.css';

const cx = classNames.bind(styles);

interface IOpenToCoopProps extends HTMLAttributes<HTMLElement> {
  email: string;
}

export const OpenToCooperation: FC<IOpenToCoopProps> = (props) => {
  const { email } = props;

  return (
    <div className={cx('container')}>
      <div className={cx('asterisk')}></div>
      <h5 className={cx('header')}>Проект открыт к&nbsp;сотрудничеству</h5>
      <p className={cx('text')}>Мы находимся в постоянном поиске режиссёров и актеров, заинтересованных в постановке читок.
        <br/>
        <br />Пишите на
        <a className={cx('link')} href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
};
