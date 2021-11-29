import { FC } from 'react';
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
  const { title, buttonLink, desc, videoKey } = data;

  return ( 
    <section className={cn(styles.archive)}>
      <div className={cn(styles.content)}>
        <h2 className={cn(styles.title)}>
          <p className={cn(styles.text)}>{title[0]}</p>
          <span className={cn(styles.link)}>
            <Button 
              label='YOUTUBE'
              isLink={true} 
              href={buttonLink}
              icon='arrow-right'
              iconPlace='left'
              border='bottomLeft'
              size='s'
            />
          </span>
          {title[1]}
        </h2>
        <p className={cn(styles.desc)}>
          {desc}
        </p>
      </div>
      <div className={cn(styles.video)}>
        <iframe 
          width='100%' 
          height='100%'
          src={`https://www.youtube.com/embed/${ videoKey }`}
          frameBorder="0" 
          allowFullScreen 
        />
      </div>
    </section>
  );
};
