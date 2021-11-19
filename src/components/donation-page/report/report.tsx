import { FC } from 'react';
import cn from 'classnames/bind';
import styles from './report.module.css';

const cx = cn.bind(styles);

interface IReportProps {
  text: string;
  email: string;
}

export const Report: FC<IReportProps> = (props) => {
  const { text, email } = props;

  return (
    <div className={cx('reportContainer')}>
      <p className={cx('reportText')}>
        {text}
        <span className={cx('reportEmail')}>{email}</span>
      </p>
    </div>
  );
};
