import { FC } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { Button } from 'components/ui/button';

import styles from './main-archive.module.css';

interface IMainArchiveProps {
  data: {
    id: number
    title: string[]
    buttonLink: string
    desc: string
    videoKey: string
  }
}

export const MainArchive: FC<IMainArchiveProps> = ({ data }) => {
  const { title, buttonLink, desc } = data;

  return ( 
    <section className={ cn(styles.archive) }>
      <div className={ cn(styles.content) }>
        <h2 className={ cn(styles.title) }>
          <p className={ cn(styles.text) }>{ title[0] }</p>
          <span className={ cn(styles.link) }>
            <Button 
              label='YOUTUBE'
              isLink={ true } 
              href={ buttonLink }
              icon='arrow-right'
              iconPlace='left'
              border='bottomLeft'
              size='s'
              className={ cn(styles.button) }
            />
          </span>
          { title[1] }
        </h2>
        <p className={ cn(styles.desc) }>
          { desc }
        </p>
      </div>
      <div className={ cn(styles.img) }>
        <a href="#" className={ cn(styles.linkImg) }>
          <Image
            alt='YOUTUBE'
            src="/images/main/archive.jpg"
            width={540}
            height={258}
            layout="responsive"
          />
        </a>
      </div>
    </section>
  );
};
