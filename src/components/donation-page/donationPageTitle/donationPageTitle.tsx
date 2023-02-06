import cn from 'classnames/bind';

import type { VFC } from 'react';

import styles from './donationPageTitle.module.css';

const cx = cn.bind(styles);

interface IDonationPageTitleProps {
  header: string
  text: string
}

export const DonationPageTitle: VFC<IDonationPageTitleProps> = ({ header, text }) => {
  return (
    <section className={cx('componentContainer')}>
      <div className={cx('data')}>
        <h1 className={cx('header')}>
          {header}
        </h1>
        <p className={cx('text')}>
          {text}
        </p>
      </div>
    </section>
  );
};
