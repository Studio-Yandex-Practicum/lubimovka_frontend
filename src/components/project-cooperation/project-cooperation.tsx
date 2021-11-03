import {FC, HTMLAttributes} from 'react';
import classNames from 'classnames/bind';
import styles from './project-cooperation.module.css';
import { Email } from 'shared/types/common';
import { Icon } from '../ui/icon/icon';

const cx = classNames.bind(styles);

interface IProjectCooperationProps extends HTMLAttributes<HTMLElement> {
  email: Email;
}

export const ProjectCooperation: FC<IProjectCooperationProps> = (props) => {
  const { email } = props;

  return (
    <div className={cx('projectCooperation')}>
      <Icon glyph='asterisk' className={cx('asterisk')} />
      <h3 className={cx('header')}>Проект открыт к&nbsp;сотрудничеству</h3>
      <p className={cx('text')}>Мы находимся в постоянном поиске режиссёров и актеров, заинтересованных в постановке читок.</p>
      <p className={cx('text')}>Пишите на <a className={cx('link')} href={`mailto:${email}`}>{email}</a></p>
    </div>
  );
};
