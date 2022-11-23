import { FC, useState, useEffect, Dispatch, } from 'react';
import { disableBodyScroll, enableBodyScroll } from '@funboxteam/diamonds';

import LibraryForm from 'components/library-form/library-form';
import LibraryFilter from 'components/library-filter/library-filter';
import { PlayCard } from 'components/play-card';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { Menu } from 'components/ui/menu';
import { Icon } from 'components/ui/icon';
import { DroplistOption } from 'components/ui/droplist';
import LibraryFiltersModal from './library-filters-modal';
import LibraryPreloader from './library-preloader/library-preloader';
import LibraryTagsMobile from 'components/library-tags-mobile/library-tags-mobile';
import { Play } from '__generated__/api-typings';
import { Action } from 'components/library-filter/library-filter-reducer';
import { IProgram } from 'pages/library';

import styles from './index.module.css';

interface ILibraryPageProps {
  isLoading: boolean;
  items: Play[];
  years: DroplistOption[];
  programmes: Array<IProgram>;
  filterDispatcher: Dispatch<Action>;
}

const LibraryPage: FC<ILibraryPageProps> = ({ isLoading, items, years, programmes, filterDispatcher }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleFiltersClick(): void {
    setIsModalOpen((prev) => !prev);
  }

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
            <Menu type="library-navigation">
              <Menu.Item
                href="/library"
                current
              >
                Пьесы
              </Menu.Item>
              <Menu.Item
                href="/library/authors"
              >
                Авторы
              </Menu.Item>
            </Menu>
          </div>
          <div className={styles.mobileTags}>
            <LibraryTagsMobile programmes={programmes} filterDispatcher={filterDispatcher}/>
          </div>
          <div className={styles.filter}>
            <LibraryFilter
              years={years}
              programmes={programmes}
              filterDispatcher={filterDispatcher}
            />
          </div>
        </div>
        <section className={styles.section}>
          <h1 className={styles.title}>
            Библиотека
          </h1>
          <div className={styles.search}>
            <LibraryForm/>
          </div>
          {isLoading ? (
            <div className={styles.loader}>
              <LibraryPreloader/>
            </div>
          ) : (
            <div className={styles.pieces}>
              {!items.length
              && (
                <p className={styles.noResult}>
                  Ничего не найдено. Попробуйте изменить параметры поиска.
                </p>
              )
              }
              <BasicPlayCardList>
                {items.map(({ id, name, city, year, url_download, url_reading, authors }) => (
                  <PlayCard
                    key={id}
                    play={{
                      title: name,
                      city,
                      year,
                      readingUrl: url_reading,
                      downloadUrl: url_download,
                      authors
                    }}
                  />
                ))}
              </BasicPlayCardList>
            </div>
          )}
        </section>
        <section className={styles.piecesMobile}>
          {!items.length
          && (
            <p className={styles.noResult}>
              Ничего не найдено. Попробуйте изменить параметры поиска.
            </p>
          )
          }
          {isLoading ? (
            <div className={styles.loaderMobile}>
              <LibraryPreloader/>
            </div>
          ) : (
            <>
              {items.map(({ id, name, city, year, url_download, url_reading, authors }) => (
                <PlayCard
                  key={id}
                  play={{
                    title: name,
                    city,
                    year,
                    readingUrl: url_reading,
                    downloadUrl: url_download,
                    authors
                  }}
                />
              ))}
            </>
          )}
        </section>
        <LibraryFiltersModal
          isModalOpen={isModalOpen}
        >
          <LibraryFilter
            years={years}
            programmes={programmes}
            filterDispatcher={filterDispatcher}
            onCheckResults={handleFiltersClick}
          />
        </LibraryFiltersModal>
      </div>
    </main>
  );
};

export default LibraryPage;
