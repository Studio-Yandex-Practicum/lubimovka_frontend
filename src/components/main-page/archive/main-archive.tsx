/* eslint-disable import/no-unresolved */
import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { MainVideoArchive } from 'api-typings';

import { Button } from 'components/ui/button';

import styles from './main-archive.module.css';

export const MainArchive: FC<MainVideoArchive> = ({ photo, url }) => {
  return ( 
    <section className={cn(styles.archive)}>
      <div className={cn(styles.content)}>
        <h2 className={cn(styles.title)}>
          <p className={cn(styles.text)}>
            Видео-архив
          </p>
          <span className={cn(styles.link)}>
            <Button 
              label='YOUTUBE'
              isLink={true} 
              href={url}
              icon='arrow-right'
              iconPlace='left'
              border='bottomLeft'
              size='s'
              className={cn(styles.button)}
            />
          </span>
          всех читок и событий
        </h2>
        <p className={cn(styles.desc)}>
          На все читки и мастер-классы фестиваля вход свободный по предварительной регистрации.
        </p>
      </div>
      <div className={cn(styles.img)}>
        <a href={url} className={cn(styles.linkImg)}>
          <Image
            alt='YOUTUBE'
            src={photo}
            width={540}
            height={258}
            layout="responsive"
          />
        </a>
      </div>
    </section>
  );
};
