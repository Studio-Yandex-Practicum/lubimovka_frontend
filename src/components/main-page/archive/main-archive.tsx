import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames/bind';
import { MainVideoArchive } from 'api-typings';

import { Button } from 'components/ui/button';

import styles from './main-archive.module.css';

const cx = cn.bind(styles);

export const MainArchive: FC<MainVideoArchive> = ({ photo, url }) => (
  <section className={cx('archive')}>
    <div className={cx('content')}>
      <h2 className={cx('title')}>
        <p className={cx('text')}>
            Видео-архив
        </p>
        <span className={cx('link')}>
          <Button
            label="YOUTUBE"
            isLink={true} 
            href={url}
            icon="arrow-right"
            iconPlace="left"
            border="bottomLeft"
            size="s"
            className={cx('icon')}
          />
        </span>
          всех читок и событий
      </h2>
      <p className={cx('desc')}>
          На все читки и мастер-классы фестиваля вход свободный по предварительной регистрации.
      </p>
    </div>
    <div className={cx('img')}>
      <a 
        href={url} 
        className={cx('linkImg')}
        target="_blank" rel="noreferrer"
      >
        <Image
          alt="YOUTUBE"
          src={photo}
          width={540}
          height={258}
          layout="responsive"
        />
      </a>
    </div>
  </section>
);
