import React from 'react';
import Image from 'next/image';
import cn from 'classnames/bind';

import styles from './what-we-do-desc.module.css';

const cx = cn.bind(styles);

export const WhatWeDoDesc = (): JSX.Element => (
  <section className={cx('descItem')}>
    <aside className={cx('content', 'acceptance')}>
      <div className={cx('container')}>
        <h2 className={cx('mainTitle')}>
            Что мы делаем
        </h2>
        <h3 className={cx('title', 'titleWidth')}>
            Каждый год мы проводим приём и отбор новых пьес начинающих и признанных русскоязычных авторов. 
        </h3>
        <p className={cx('desc')}>
            Мы отдаём предпочтение пьесам, которые передают уникальное и свежее авторское видение, затрагивают актуальные темы, написаны современным языком и оригинальны по форме, а также произведениям с живыми персонажами, увлекательным сюжетом и запоминающимися образами.
        </p>
      </div>
      <div className={cx('containerImg')}>
        <Image 
          src="/images/what-we-do/desc-img-one.jpg"
          alt="Прием и отбор новых пьес"
          width={450}
          height={594}
          layout="responsive"
        />
      </div>
    </aside>
      
    <aside className={cx('content', 'selected')}>
      <Image 
        src="/images/what-we-do/desc-img-two.jpg"
        alt="Пьесы, прошедшие отбор"
        width={630}
        height={277}
        layout="responsive"
      />
      <div className={cx('container', 'containerSelected')}>
        <h3 className={cx('title')}>
            Пьесы, прошедшие отбор, мы представляем профессионалам театра и всем желающим в форме режиссёрских читок.
        </h3>
        <p className={cx('desc')}>
            Вход на все мероприятия фестиваля Любимовка всегда был и всегда будет свободным.
        </p>
      </div>
    </aside>

    <aside className={cx('container', 'containerInvite')}>
      <h3 className={cx('title')}>
          После каждой читки мы приглашаем авторов и аудиторию к обсуждению пьесы.
      </h3>
      <p className={cx('desc')}>
          Мы не спорим о вкусах. Мы судим произведения по законам, предлагаемым произведениями. Мы исходим из того, что за каждой пьесой стоит личный авторский замысел. 
          Мы уважаем авторский выбор художественных целей и творческих методов. Мы ценим готовность автора обсуждать свою работу и доверяем ему в его дальнейшей работе.
      </p>
    </aside>
  </section>
);
