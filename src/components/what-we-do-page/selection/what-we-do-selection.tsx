import cn from 'classnames/bind';

import styles from './what-we-do-selection.module.css';

const cx = cn.bind(styles);

export const WhatWeDoSelection = (): JSX.Element => (
  <section className={cx('selection')}>
    <h2 className={cx('mainTitle')}>
      Как происходит отбор
    </h2>
    <ol className={cx('list')}>
      <li className={cx('item')}>
        <span className={cx('number')}>
          1
        </span>
        <h3 className={cx('title')}>
          На первом этапе каждую пьесу, присланную на конкурсную программу, читают как минимум два отборщика
        </h3>
        <div className={cx('container')}>
          <p className={cx('desc')}>
            Каждый отборщик ставит пьесе оценку
            <b className={cx('strong')}>
              0/1 («нет») или 2/3 («да»).
            </b>
          </p>
          <p className={cx('desc')}>
            Если пьеса получает оценки 3-3 или 3-2, то она попадает в лонг-лист.
          </p>
          <p className={cx('desc')}>
            Если пьеса получает любые другие оценки, кроме двух «нет», то она отправляется следующим ридерам, пока в наборе оценок пьесы не появится два «да» или два «нет».
          </p>
        </div>
      </li>
      <li className={cx('item')}>
        <span className={cx('number')}>
          2
        </span>
        <h3 className={cx('title')}>
          Лонг-лист пьес читают все отборщики
        </h3>
        <div className={cx('container')}>
          <p className={cx('desc')}>
            Каждый отборщик ставит каждой пьесе из лонг-листа оценку:
            <b className={cx('strong')}>
              «да» или «нет».
            </b>
          </p>
          <p className={cx('desc')}>
            По совокупности этих оценок формируется шорт-лист фестиваля.
          </p>
        </div>
      </li>
      <li className={cx('item')}>
        <span className={cx('number')}>
          3
        </span>
        <h3 className={cx('title')}>
          Параллельно с этим отбором кураторы программы Fringe читают все пьесы, присланные на конкурс
        </h3>
        <div className={cx('container')}>
          <p className={cx('desc')}>
            Они коллегиально формируют специальную программу, для представления которой отводится отдельный день на фестивале.
          </p>
        </div>
      </li>
    </ol>
  </section>
);
