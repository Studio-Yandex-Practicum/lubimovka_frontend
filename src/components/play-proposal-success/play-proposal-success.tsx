import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './play-proposal-success.module.css';

const cx = classNames.bind(styles);

export const PlayProposalSuccess: FC = () => {
  return (
    <section className={cx('container')}>
      <h1 className={cx('title')}>
        Спасибо, мы получили вашу пьесу, скоро начнется отбор. Следите за
        новостями в наших соцсетях!
      </h1>
      <img
        src="/images/play-proposal-success/PlayProposalSuccessImage.jpg"
        alt="Успешная отправка"
        className={cx('image')}
      />
    </section>
  );
};
