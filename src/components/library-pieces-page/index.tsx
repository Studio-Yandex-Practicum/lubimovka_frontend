import { FC } from 'react';

import LibraryForm from 'components/library-form/library-form';
import LibraryFilter from 'components/library-filter/library-filter';
import { BasicPlayCard, BasicPlayCardList, IBasicPlayCardProps } from 'components/ui/basic-play-card';
import { Menu } from 'components/ui/menu';
import { Icon } from 'components/ui/icon';

import styles from './index.module.css';

const mockCard = {
  play: {
    title: 'Конкретные разговоры пожилых супругов ни о чём',
    city: 'Санкт-Петербург',
    year: '2020',
    linkView: 'https://lubimovka.ru/',
    linkDownload: 'https://lubimovka.ru/',
  },
  author: {
    id: 1,
    name: 'Екатерина Августеняк',
  }
};

const items = Array.from(Array(7)).map(() => mockCard);

const LibraryPage: FC = () => {
  return (
    <main className={styles.wrap}>
      <div className={styles.filtersButton}>
        <Icon glyph='filter' />
      </div>
      <div className={styles.topWrap}>
        <div className={styles.top} />
      </div>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <div className={styles.menu}>
            <Menu type='history'>
              <Menu.Item
                href='/library'
              >
        Пьесы
              </Menu.Item>
              <Menu.Item
                href='/library/authors'
              >
        Авторы
              </Menu.Item>
            </Menu>
          </div>
          <div className={styles.filter}>
            <LibraryFilter />
          </div>
        </div>
        <section className={styles.section}>
          <h1 className={styles.title}>Библиотека</h1>
          <div className={styles.search}>
            <LibraryForm />
          </div>
          <div className={styles.pieces}>
            <BasicPlayCardList>
              {(items as IBasicPlayCardProps[]).map((item, idx) => (
                <BasicPlayCard key={idx} {...item}/>
              ))}
            </BasicPlayCardList>
          </div>
        </section>
        <section className={styles.piecesMobile}>
          {(items as IBasicPlayCardProps[]).map((item, idx) => (
            <BasicPlayCard key={idx} {...item}/>
          ))}
        </section>
      </div>
    </main>
  );
};

export default LibraryPage;
