import { NextPage } from 'next';
import Head from 'next/head';
import cn from 'classnames/bind';
import Image from 'next/image';

import { MainTitle } from 'components/main-page/title';
import { MainEvents } from 'components/main-page/events';
import { MainAside } from 'components/main-page/aside';
import { MainBanners } from 'components/main-page/banners';
import { MainPlatforms } from 'components/main-page/platforms';
import { MainShortList } from 'components/main-page/shortList';
import { MainArchive } from 'components/main-page/archive';
import { Partners, IPartner } from 'components/partners';
import { FirstScreen } from 'components/main-page/first-screen';
import { AppLayout } from 'components/app-layout';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import * as breakpoints from 'shared/breakpoints.js';

import data from 'components/main-page/assets/mock-data.json';
import mainEventsData from 'components/main-page/assets/main-events.json';
import mainShortListData from 'components/main-page/assets/main-short-list-data.json';
import mainArchiveData from 'components/main-page/assets/main-archive-data.json';
import mainPlatformsData from 'components/main-page/assets/main-platforms-data.json';
import styles from './index.module.css';

const cx = cn.bind(styles);

const MainPage: NextPage = () => {
  const { title, events, aside, banners, platforms, partners, archive, shortList, metaTitle } = data;
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  return (
    <>
      <AppLayout hiddenPartners screenImg={true && <div className={cx('wrapper')}>
        <Image
          alt="screen"
          src={isMobile ? '/images/main/screen-mobile.jpg' : '/images/main/screen.jpg'}
          layout="fill"
          objectFit="fill"
        />
      </div>}>
        <>
          <Head>
            <title>{metaTitle}</title>
          </Head>
          <main className={cx('main')}>
            <FirstScreen/>
            {aside && <MainAside/>}
            {title && (
              <MainTitle
                title={title.title}
                view={title.view}
                buttonLink={title.buttonLink}
                buttonText={title.buttonText}
                text={title.text}
              />
            )}
            {events && <MainEvents data={mainEventsData}/>}
            {banners && <MainBanners/>}
            {platforms && <MainPlatforms {...mainPlatformsData}/>}
            {shortList && <MainShortList data={mainShortListData}/>}
            {archive && mainArchiveData.map((el) => (
              <MainArchive key={el.id} data={el}/>
            ))}
            {partners && <Partners {...partners as IPartner}/>}
          </main>
        </>
      </AppLayout>
    </>
  );
};

export default MainPage;
