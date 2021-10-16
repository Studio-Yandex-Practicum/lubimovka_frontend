import { FC } from 'react';
import { Url } from 'shared/types';
import classNames from 'classnames/bind';
import styles from './play-proposal-success.module.css';
import Image from 'next/image';
import picture from './assets/PlayProposalSuccessImage.png';

interface IPlayProposalSuccessProps {
  /* image: Url, */
  title: string,
}

const cx = classNames.bind(styles);

export const PlayProposalSuccess: FC<IPlayProposalSuccessProps> = (props)=> {
  const {/* image, */ title} = props;
  return (
    <article className={cx('page')}>
      <h1 className={cx('title')}>{title}</h1>
      <div className={cx('image-conatiner')}>
        <img src={picture} className={cx('image')}/>
        {/* <Image src={picture} alt='Мы получили вашу пьесу' layout="fill"/> */}
      </div>
    </article>
  );
};
