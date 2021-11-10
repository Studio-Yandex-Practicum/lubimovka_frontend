import { useRef } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import cn from 'classnames/bind';
import { MainTitle } from 'components/main-page/title';
import { MainEvents } from 'components/main-page/events';
import { MainAside } from 'components/main-page/aside';
import { MainBanners } from 'components/main-page/banners';
import { MainPlatforms } from 'components/main-page/platforms';
import { MainShortList } from 'components/main-page/shortList';
import { MainArchive } from 'components/main-page/archive';
import { MainPartners } from 'components/main-page/partners';
import AppLayout from 'components/app-layout';
import data from 'components/main-page/assets/mock-data.json';
import mainEventsData from 'components/main-page/assets/main-events.json';
import mainPlatformsData from 'components/main-page/assets/main-platforms-data.json';
import mainShortListData from 'components/main-page/assets/main-short-list-data.json';
import mainArchiveData from 'components/main-page/assets/main-archive-data.json';

import { Droplist } from 'components/ui/droplist';

import styles from './index.module.css';
const cx = cn.bind(styles);

const MainPage: NextPage = () => {
  const droplistRef = useRef(null);
  
  const { title, events, aside, banners, platforms, partners, archive, shortList, metaTitle } = data;
  return (
    <AppLayout hiddenPartners>
      <>
        <Head>
          <title>{ metaTitle }</title>
        </Head>
        <main className={cx('main')}>

          {/* Кнопка Очистить */}
          <button onClick={() => droplistRef.current?.deleteAll()}>Очистить</button>
          {/* Кнопка Х для элементов */}
          <button onClick={() => droplistRef.current?.deleteItem('март')}>deleteItem</button>
          {/* Дроплист */}
          <Droplist type='months' cb={(years: string[]) => {
            console.log(years);}} ref={droplistRef} />

          {title && (
            <MainTitle
              title={title.title}
              view={title.view}
              buttonLink={title.buttonLink}
              buttonText={title.buttonText}
              text={title.text}
            />
          )}
          {events && <MainEvents data={ mainEventsData } />}
          {aside && <MainAside />}
          {banners && <MainBanners />}
          {platforms && <MainPlatforms data={ mainPlatformsData[0] } />}
          {shortList && <MainShortList data={ mainShortListData }/>}
          {archive && mainArchiveData.map((el) => (
            <MainArchive key={el.id} data={el} />
          ))}
          {partners && <MainPartners />}
        </main>
      </>
    </AppLayout>
  );
};

export default MainPage;
