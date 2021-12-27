import { FC, useState, useEffect, Dispatch, useRef, RefObject, useContext } from 'react';
import { disableBodyScroll, enableBodyScroll } from '@funboxteam/diamonds';
import { useRouter } from 'next/router';

import LibraryForm from 'components/library-form/library-form';
import LibraryFilter from 'components/library-filter/library-filter';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { Menu } from 'components/ui/menu';
import { Icon } from 'components/ui/icon';
import { IDroplistPublic } from 'components/ui/droplist';
import LibraryFiltersModal from './library-filters-modal';
import LibraryPreloader from './library-preloader/library-preloader';
import LibraryTagsMobile from 'components/library-tags-mobile/library-tags-mobile';
import { Play } from 'api-typings';
import { Action } from 'components/library-filter/library-filter-reducer';
import { IProgram } from 'pages/library';
import CurrentFiltersContext from '../../pages/library/library-filters-context';

import styles from './index.module.css';

interface ILibraryPageProps {
  isLoading: boolean;
  items: Play[];
  years: number[];
  programmes: Array<IProgram>;
  filterDispatcher: Dispatch<Action>;
}

const LibraryPage: FC<ILibraryPageProps> = ({ isLoading, items, years, programmes, filterDispatcher }) => {
  const filterState = useContext(CurrentFiltersContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [droplistRef,droplistRefMobile] = [useRef(null) as RefObject<IDroplistPublic>,useRef(null) as RefObject<IDroplistPublic>];

  const router = useRouter();

  function handleFiltersClick():void {
    setIsModalOpen((prev) => !prev);
  }

  useEffect(() => {
    droplistRef.current?.addSelectItems(filterState.festival);
    droplistRefMobile.current?.addSelectItems(filterState.festival);
  },[]);

  useEffect(() => {
    isModalOpen ? disableBodyScroll({ savePosition: true }) : enableBodyScroll();

    return () => enableBodyScroll();
  }, [isModalOpen]);

  return (
    <main className={styles.wrap}>
      <div onClick={handleFiltersClick} className={styles.filtersButton}>
        <Icon glyph={isModalOpen ? 'cross' : 'filter'}/>
      </div>
      <div className={styles.topWrap}>
        <div className={styles.top}/>
      </div>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <div className={styles.menu}>
            <Menu type='history'>
              <Menu.Item
                href='/library'
                current={router.asPath === '/library'}
              >
                Пьесы
              </Menu.Item>
              <Menu.Item
                href='/library/authors'
                current={router.asPath === '/library/authors'}
              >
                Авторы
              </Menu.Item>
            </Menu>
          </div>
          <div className={styles.mobileTags}>
            <LibraryTagsMobile programmes={programmes} filterDispatcher={filterDispatcher}
              droplistRef={droplistRefMobile}/>
          </div>
          <div className={styles.filter}>
            <LibraryFilter years={years} programmes={programmes}
              filterDispatcher={filterDispatcher} droplistRef={droplistRef}/>
          </div>
        </div>
        <section className={styles.section}>
          <h1 className={styles.title}>Библиотека</h1>
          <div className={styles.search}>
            <LibraryForm/>
          </div>
          {isLoading ? (
            <div className={styles.loader}>
              <LibraryPreloader/>
            </div>
          ) : (
            <div className={styles.pieces}>
              <BasicPlayCardList>
                {items.map(({ id, name, city, year, url_download, url_reading, authors }) => (
                  <BasicPlayCard
                    key={id}
                    play={{
                      title: name,
                      city,
                      year,
                      linkView: url_reading ? url_reading : '',
                      linkDownload: url_download ? url_download : '',
                      authors
                    }}/>
                ))}
              </BasicPlayCardList>
            </div>
          )}
        </section>
        <section className={styles.piecesMobile}>
          {isLoading ? (
            <LibraryPreloader/>
          ) : (
            <>
              {items.map(({ id, name, city, year, url_download, url_reading, authors }) => (
                <BasicPlayCard
                  key={id}
                  play={{
                    title: name,
                    city,
                    year,
                    linkView: url_reading ? url_reading : '',
                    linkDownload: url_download ? url_download : '',
                    authors
                  }}/>
              ))}
            </>
          )}
        </section>
        <LibraryFiltersModal isModalOpen={isModalOpen}><LibraryFilter years={years} programmes={programmes}
          filterDispatcher={filterDispatcher} onCheckResults={handleFiltersClick}
          droplistRef={droplistRefMobile}/></LibraryFiltersModal>
      </div>
    </main>
  );
};

export default LibraryPage;
