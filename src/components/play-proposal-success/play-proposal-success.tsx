import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './play-proposal-success.module.css';

interface IPlayProposalSuccessProps {
  title: string;
}

const cx = classNames.bind(styles);

export const PlayProposalSuccess: FC<IPlayProposalSuccessProps> = (props) => {
  const { title } = props;
  return (
    <article className={cx('container')}>
      <h1 className={cx('title')}>{title}</h1>
      <img
        src="/image/play-proposal-success/PlayProposalSuccessImage.png"
        alt="Успешная отправка"
        className={cx('image')}
      />
    </article>
  );
};
