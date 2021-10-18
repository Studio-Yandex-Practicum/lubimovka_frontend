import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './play-proposal-success.module.css';

interface IPlayProposalSuccessProps {
  title: string,
}

const cx = classNames.bind(styles);

export const PlayProposalSuccess: FC<IPlayProposalSuccessProps> = (props)=> {
  const {title} = props;
  return (
    <article className={cx('page')}>
      <h1 className={cx('title')}>{title}</h1>
      <div className={cx('image-conatiner')}>
        <img src='/image/play-proposal-success/PlayProposalSuccessImage.png' className={cx('image')}/>
      </div>
    </article>
  );
};
