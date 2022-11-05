import Image from 'next/image';
import classNames from 'classnames/bind';

import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';

import type { FC } from 'react';
import type { Url } from 'shared/types';

import styles from './homepage-video-archive-section.module.css';

interface HomepageVideoArchiveSectionProps {
  url: Url
  image: Url
}

const cx = classNames.bind(styles);

export const HomepageVideoArchiveSection: FC<HomepageVideoArchiveSectionProps> = ({ url, image }) => (
  <section className={cx('root')}>
    <div className={cx('content')}>
      <h2 className={cx('title')}>
        Видео-архив
        <Button
          className={cx('action')}
          size="xs"
          icon={(
            <Icon
              glyph="arrow-right"
              width="100%"
              height="100%"
            />
          )}
          border="bottom-left"
          upperCase
          target="_blank"
          href={url}
        >
          Youtube
        </Button>
        {' '}
        всех читок и событий
      </h2>
      <p className={cx('description')}>
        На все читки и мастер-классы фестиваля вход свободный по предварительной регистрации.
      </p>
    </div>
    <div className={cx('image-canvas')}>
      <a
        href={url}
        className={cx('link')}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt=""
          src={image}
          width={540}
          height={258}
          layout="responsive"
        />
      </a>
    </div>
  </section>
);
