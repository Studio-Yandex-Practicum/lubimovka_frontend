import { FC } from 'react';
import cn from 'classnames';

import styles from './what-we-do-desc.module.css';

// interface IWeDoAboutProps {

// }

// Компоненты
import { DescContent } from './desc-content';

export const WhatWeDoDesc: FC = (): JSX.Element => {
  const title = [
    'Каждый год мы проводим приём и отбор новых пьес начинающих и признанных русскоязычных авторов.',
    'Пьесы, прошедшие отбор, мы представляем профессионалам театра и всем желающим в форме режиссёрских читок.',
    'После каждой читки мы приглашаем авторов и аудиторию к обсуждению пьесы.',
  ];

  const desc = [
    `Мы отдаём предпочтение пьесам, которые передают уникальное и свежее авторское видение, затрагивают актуальные темы,
    написаны современным языком и оригинальны по форме, а также произведениям с живыми персонажами, увлекательным сюжетом и
    запоминающимися образами.`,
    'Вход на все мероприятия фестиваля Любимовка всегда был и всегда будет свободным.',
    `Мы не спорим о вкусах. Мы судим произведения по законам, предлагаемым произведениями. Мы исходим из того, что за каждой пьесой
    стоит личный авторский замысел. Мы уважаем авторский выбор художественных целей и творческих методов. Мы ценим готовность автора
    обсуждать свою работу и доверяем ему в его дальнейшей работе.`,
  ];

  const mainImg = 'https://static.zarahome.net/8/photos4/2021/I/4/1/p/5357/046/250/5357046250_1_1_3.jpg?t=1620133108320';
  const someImg = 'https://hudognik.net/cache/25154_gal2.jpg';

  return (
    <section className={ cn(styles.desc) }>
      <img src={ mainImg } className={ cn(styles.img) } />

      <div className={ cn(styles.contentReception) }>
        <div className={ cn(styles.containerReception) }>
          <h2 className={ cn(styles.mainTitle) }>
            Что мы делаем
          </h2>

          <DescContent title={ title[0] } desc={ desc[0] } />
        </div>
        <img src={ mainImg } className={ cn(styles.imgReception) } />
      </div>

      <div className={ cn(styles.contentSelected) }>
        <div className={ cn(styles.containerSelected) }>
          <DescContent title={ title[1] } desc={ desc[1] } />
        </div>
        <img src={ someImg } className={ cn(styles.imgSelected) } />
      </div>


      <div className={ cn(styles.containerInvite) }>
        <DescContent title={ title[2] } desc={ desc[2] } />
      </div>
    </section>
  );
};
