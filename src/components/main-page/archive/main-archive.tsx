import { FC } from 'react';
import cn from 'classnames';

import { Button } from 'components/ui/button';

import styles from './main-archive.module.css';

export const MainArchive: FC = () => {
  return ( 
    <section className={ cn(styles.archive) }>
      <div className={ cn(styles.content) }>
        <h2 className={ cn(styles.title) }>
          Видео-архив
          <span className={ cn(styles.link) }>
            <Button 
              label={ 'YOUTUBE' } 
              isLink={ true } 
              href={ '#' } 
              icon={ 'arrow-right' } 
              width={ '106px' } 
              iconPlace={ 'left' }
              border={ 'bottomLeft' }
            />
          </span>
          всех читок и событий
        </h2>
        <p className={ cn(styles.desc) }>
          На все читки и мастер-классы фестиваля вход свободный по предварительной регистрации.
        </p>
      </div>
      <div className={ cn(styles.video) }>
        <iframe 
          width="100%" 
          height="100%"
          src="https://www.youtube.com/embed/iAJTBxq2WZs" 
          frameBorder="0" 
          allowFullScreen 
        />
      </div>
    </section>
  );
};
