import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './play-proposal-success.module.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPlayProposalSuccessProps {}

const cx = classNames.bind(styles);

export const PlayProposalSuccess: FC<IPlayProposalSuccessProps> = () => {
  return (
    <section className={cx('container')}>
      <h1 className={cx('title')}>
        Спасибо, мы получили вашу пьесу, скоро начнется отбор. Следите за
        новостями в наших соцсетях!
      </h1>
      <img
        src="/image/play-proposal-success/PlayProposalSuccessImage.png"
        alt="Успешная отправка"
        className={cx('image')}
      />
    </section>
  );
};
