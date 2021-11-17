import { FC } from 'react';
import cn from 'classnames/bind';
import styles from './report.module.css';

const cx = cn.bind(styles);

interface IReportProps {
  text: string;
}

export const Report: FC<IReportProps> = (props) => {
  const { text } = props;

  return (
    <div className={cx('stub')}>
      {text}
    </div>
  );
};
