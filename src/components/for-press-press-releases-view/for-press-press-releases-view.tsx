import React, { FC, useState, useEffect } from 'react';
import cn from 'classnames/bind';

// import Image from 'next/image';

import { Url } from 'shared/types';
import { Droplist } from 'components/ui/droplist';
import { Button } from 'components/ui/button';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import breakpoints from 'shared/breakpoints.js';

import styles from './for-press-press-releases-view.module.css';

const cx = cn.bind(styles);

export interface IForPressPressReleasesViewProps {
  data: {
    defaultCover: Url,
    pressReleases: PressRelease[],
  },
}

type PressRelease = {
  year: number,
  cover: Url,
  downloadLink: Url,
  contents: Content[]
}

type Content = {
  content_type: ContentType;
  content_item: Record<ContentType, string | string[]>;
}

type ContentType = 'text' | 'title' | 'preamble' | 'list';

export const ForPressPressReleasesView: FC<IForPressPressReleasesViewProps> = ({ data }) => {

  const pressReleaseYears = data.pressReleases.map((i)=> {return i.year;}).sort((a, b) => b - a);
  const pressReleaseDefaultYear = pressReleaseYears[0];
  const [pressReleaseYearSelected, setPressReleaseYearSelected] = useState<string[] | number>(pressReleaseDefaultYear);
  const pressReleaseSelected = data.pressReleases.find(i => i.year === pressReleaseYearSelected);
  const defaultCover = data.defaultCover;

  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  useEffect(() => {
    setPressReleaseYearSelected(pressReleaseYearSelected);
  }, [ pressReleaseYearSelected ]);

  return (
    <section className={cx('main')}>
      <h3 className={cx('title')}>
        Пресс-релизы
      </h3>
      <nav className={cx('navigation')}>
        <p className={cx('droplistLabel')}>
          Выберите год фестиваля
        </p>
        <Droplist
          type='radio'
          data={pressReleaseYears}
          cb={(i: string[]) => {
            setPressReleaseYearSelected(Number(i));
          }}
          className={cx('droplist')}
          defaultValue={pressReleaseDefaultYear.toString()}
        />
        <Button
          view='primary'
          className={cx('button')}
          align='center'
          gap='11px'
          size='s'
          border='bottomLeft'
          iconPlace='right'
          icon='arrow-down'
          label={pressReleaseSelected === undefined ?
            'Пресс-релиз не найден'
            : pressReleaseSelected !== undefined && isMobile
              ? 'Скачать пресс-релиз в .pdf'
              : `Скачать пресс-релиз ${pressReleaseYearSelected} года в .pdf`}
          isLink={pressReleaseSelected !== undefined}
          disabled={pressReleaseSelected === undefined}
          href={pressReleaseSelected !== undefined ? pressReleaseSelected.downloadLink : ''}
        />
      </nav>
      {/* <div className={cx('coverContainer')}> */}
      {/* <Image
          className={cx('cover')}
          layout="fill"
          objectFit="cover"
          src={pressReleaseSelected ? pressReleaseSelected.cover : defaultCover }
          alt={pressReleaseYearSelected ? `Обложка фестиваля ${pressReleaseYearSelected} года` : 'Обложка фестиваля не найдена'}/> */}
      {/* </div> */}
      <img
        className={cx('cover')}
        src={pressReleaseSelected ? pressReleaseSelected.cover : defaultCover}
        alt={pressReleaseYearSelected ? `Обложка фестиваля ${pressReleaseYearSelected} года` : 'Обложка фестиваля не найдена'}
      />
      <article className={cx('pressReleaseText')}>
        {pressReleaseSelected === undefined ?
          <p>Пресс-релиз этого года не найден</p>
          : pressReleaseSelected.contents.map((item, idx) => {
            switch (item.content_type) {
            case 'preamble':
              return(<h6 key={idx}>{item.content_item.preamble}</h6>);
            case 'title':
              return(isMobile ? <h6 key={idx}>{item.content_item.title}</h6> : <h4 key={idx}>{item.content_item.title}</h4>);
            case 'list':
              return (
                <ul key={idx}>
                  {
                    Array.isArray(item.content_item.list) &&
                    item.content_item.list.map((listItem, idx) => {
                      return(<li key={idx}>{listItem}</li>);
                    })
                  }
                </ul>);
            case 'text':
              return(<p key={idx}>{item.content_item.text}</p>);
            }
          })}
      </article>
    </section>
  );
};
