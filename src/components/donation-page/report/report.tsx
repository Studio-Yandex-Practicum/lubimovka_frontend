import cn from 'classnames/bind';

import { InfoLink } from 'components/ui/info-link';

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
        <InfoLink
          className={cx('reportEmail')}
          isOutsideLink
          href={`mailto:${email}`}
          label={email}
          textDecoration="underline"
        />
      </p>
    </div>
  );
};
