import cn from 'classnames/bind';

import { Button } from 'components/ui/button2';

import type { FC } from 'react';

import styles from './report.module.css';

const cx = cn.bind(styles);

interface IReportProps {
  text: string
  email?: string
}

export const Report: FC<IReportProps> = (props) => {
  const {
    text,
    email = '#',
  } = props;

  return (
    <div className={cx('reportContainer')}>
      <p className={cx('reportText')}>
        {text}
        <Button
          border="bottom"
          size="s"
          href={`mailto:${email}`}
          className={cx('reportEmail')}
          animation='invert'
        >
          {email}
        </Button>
      </p>
    </div>
  );
};
