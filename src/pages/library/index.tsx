import { NextPage } from 'next';

import LibraryForm from 'components/library-form/library-form';
import LibraryFilter from 'components/library-filter/library-filter';
import { BasicPlayCard, BasicPlayCardList, IBasicPlayCardProps } from 'components/ui/basic-play-card';

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

const Library: NextPage = () => (
  <div className={styles.content}>
    <div style={{marginTop: '52px'}}>
      <LibraryFilter />
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
  </div>
);

export default Library;
