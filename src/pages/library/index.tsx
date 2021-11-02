import { NextPage } from 'next';

import LibraryForm from 'components/library-form/library-form';

import styles from './index.module.css';

const Library: NextPage = () => (
  <section className={styles.section}>
    <h1 className={styles.title}>Библиотека</h1>
    <LibraryForm />
  </section>
);

export default Library;
