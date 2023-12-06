import classNames from 'classnames/bind';

import type { FC } from 'react';

import styles from './play-proposal-success-layout.module.css';

const cx = classNames.bind(styles);

export const PlayProposalSuccessLayout: FC = () => {
  return (
    <section className={cx('container')}>
      <h1 className={cx('title')}>
        Спасибо, мы получили вашу пьесу. Следите за
        новостями в наших соцсетях!
      </h1>
      <img
        src="/images/form-success/PlayProposalSuccessImage.jpg"
        alt="Успешная отправка"
        className={cx('image')}
      />
    </section>
  );
};
