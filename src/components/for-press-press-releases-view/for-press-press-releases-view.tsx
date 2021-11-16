import React, { FC, useState } from 'react';
import cn from 'classnames/bind';

import styles from './for-press-press-releases-view.module.css';

import { Url } from 'shared/types';
import { Droplist } from 'components/ui/droplist';
import { Button } from 'components/ui/button';

import { useMediaQuery } from 'shared/hooks/use-media-query';
import breakpoints from 'shared/breakpoints.js';

const cx = cn.bind(styles);

export interface IForPressPressReleasesViewProps {
data: {
    cover: Url,
    pressReleases: [{
      year: number,
      downloadLink: Url,
      contents: [{
        content_type: string;
        content_item: Record<string, unknown>;
      }],
    }]
   },
}

export const ForPressPressReleasesView: FC<IForPressPressReleasesViewProps> = ({ data }) => {

  const pressReleaseYears = data.pressReleases.map((i)=> {return i.year;}).sort((a, b) => b - a);
  const pressReleaseDefaultYear = pressReleaseYears[0];
  const [pressReleaseYear, setPressReleaseYear] = useState<string[] | number>(pressReleaseDefaultYear);
  const pressReleaseSelected = data.pressReleases.find(i => i.year == pressReleaseYear);

  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  return (
    <section className={cx('main')}>
      <h3 className={cx('title')}>
        Пресс-релизы
      </h3>
      <div className={cx('wrapper')}>
        <p className={cx('droplistLabel')}>
          Выберите год фестиваля
        </p>
        <Droplist
          type='radio'
          data={pressReleaseYears}
          cb={(i: string[]) => {
            setPressReleaseYear(Number(i[0]));
          }}
          className={cx('droplist')}
        />
        {
          isMobile
            ?
            <Button
              view='primary'
              className={cx('button')}
              align='center'
              gap='11px'
              size='s'
              border='bottomLeft'
              iconPlace='right'
              icon='arrow-down'
              label={'Скачать пресс-релиз года в .pdf'}
              isLink
              href={pressReleaseSelected.downloadLink}
            />
            :
            <Button
              view='primary'
              className={cx('button')}
              align='center'
              gap='11px'
              size='s'
              border='bottomLeft'
              iconPlace='right'
              icon='arrow-down'
              label={`Скачать пресс-релиз ${pressReleaseYear} года в .pdf`}
              isLink
              href={pressReleaseSelected.downloadLink}
            />

        }
        <img className={cx('cover')} src={data.cover}/>
        <article className={cx('pressReleaseText')}>
          {pressReleaseSelected.contents.map((item, idx) => {
            switch (item.content_type) {
            case 'preamble':
              return(<h6 key={idx}>{item.content_item.preamble}</h6>);
            case 'title':
              return(<h4 key={idx}>{item.content_item.title}</h4>);
            case 'list':
              return(
                <ul key={idx}>
                  {Object.values(item.content_item).map((listItem: string, idx) => {
                    return(<li key={idx}>{listItem}</li>);
                  })
                  }
                </ul>);
            case 'text':
              return(<p key={idx}>{item.content_item.text}</p>);
            }
          })}
        </article>
      </div>
    </section>
  );
};
