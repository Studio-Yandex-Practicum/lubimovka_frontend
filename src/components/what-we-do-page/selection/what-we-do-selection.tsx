import React from 'react';
import cn from 'classnames/bind';

import styles from './what-we-do-selection.module.css';

const cx = cn.bind(styles);

export const WhatWeDoSelection = (): JSX.Element => (
  <section className={cx('selection')}>
    <h2 className={cx('mainTitle')}>
        Как происходит отбор
    </h2>
    <ul className={cx('list')}>
      <dl className={cx('item')}>
        <ol className={cx('number')}>
            1
        </ol>
        <dt className={cx('title')}>
            На первом этапе каждую пьесу, читают как минимум два отборщика
        </dt>
        <dd className={cx('desc')}>
            Каждый отборщик ставит пьесе оценку:«да», «нет» или «затрудняюсь с оценкой».
        </dd>
        <dd className={cx('desc')}>
            Если пьеса получает две оценки «да», то она попадает в лонг-лист.
        </dd>
        <dd className={cx('desc')}>
            В ином случае она отправляется следующим ридерам, пока в наборе оценок пьесы не появится два «да» или два «нет».
        </dd>
      </dl>

      <dl className={cx('item')}>
        <ol className={cx('number')}>
            2
        </ol>
        <dt className={cx('title')}>
            На первом этапе каждую пьесу, читают как минимум два отборщика
        </dt>
        <dd className={cx('desc')}>
            Каждый отборщик ставит каждой пьесе из лонг-листа оценку:«да», «нет» или «затрудняюсь с оценкой».
        </dd>
        <dd className={cx('desc')}>
            По совокупности этих оценок формируется шорт-лист фестиваля.
        </dd>
      </dl>

      <dl className={cx('item')}>
        <ol className={cx('number')}>
            3
        </ol>
        <dt className={cx('title')}>
            Параллельно с отбором кураторы программы Fringe читают все пьесы
        </dt>
        <dd className={cx('desc')}>
            Коллегиально формируют специальную программу, для представления которой отводится отдельный день на фестивале.
        </dd>
      </dl>
    </ul>
    <div className={cx('poster')}>
      <h3 className={cx('posterTitle')}>
        <span className={cx('ampersand')}>
            &
        </span>
          Помимо открытого конкурса, на который свою пьесу может прислать любой желающий
      </h3>
      <p className={cx('posterDesc')}>
          Организаторы фестиваля каждый год собирают пул новых произведений от состоявшихся драматургов и передают его куратору внеконкурсной программы. 
          Руководствуясь собственным вкусом, профессиональным опытом и представлениями о тенденциях в современном театре и драматургии, куратор выбирает 6 пьес из этого пула, 
          которые также представляются в рамках фестиваля.
      </p>
    </div>
  </section>
);
