import Image from 'next/image';
import cn from 'classnames/bind';

import styles from './what-we-do-desc.module.css';

const cx = cn.bind(styles);

export const WhatWeDoDesc = () => (
  // TODO: отрефакторить семантику всей страницы
  <section className={cx('descItem')}>
    <aside className={cx('content', 'acceptance')}>
      <div className={cx('container')}>
        <h2 className={cx('mainTitle')}>
          Что мы делаем
        </h2>
        <h3 className={cx('title', 'titleWidth')}>
          Каждый год мы принимаем и отбираем новые пьесы начинающих и признанных русскоязычных авторов.
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
          Пьесы, прошедшие отбор, мы представляем профессионалам театра и всем желающим в форме режиссёрских читок, а также по возможности в форме онлайн-трансляций.
        </h3>
      </div>
    </aside>
    <aside className={cx('container', 'containerInvite')}>
      <h3 className={cx('title')}>
        После каждой читки мы приглашаем авторов и аудиторию к обсуждению пьесы.
      </h3>
      <p className={cx('desc')}>
        Мы не спорим о вкусах. Мы анализируем произведения по законам, предложенным самим автором. Мы исходим из того, что за каждой пьесой стоит авторское высказывание.
        Мы уважаем личный выбор художественных целей и творческих методов. Мы ценим готовность автора обсуждать свой текст и&nbsp;доверяем ему в его дальнейшей работе.
      </p>
      <p className={cx('desc')}>
        Наша цель — создавать и поддерживать атмосферу свободного художественного и человеческого высказывания без цензурных, политических и идеологических ограничений.
      </p>
      <p className={cx('desc')}>
        Мы стараемся ограждать творческое и дискуссионное пространство фестиваля от влияния пропаганды любых государств, интересов коммерческих структур и агрессивной человеконенавистнической риторики любой природы.
      </p>
      <p className={cx('desc')}>
        Мы предоставляем публичный доступ к текстам из основной и дополнительных программ фестиваля.
      </p>
      <p className={cx('desc')}>
        Мы поддерживаем и организуем театральные лаборатории, в том числе международные, с участием русскоязычных драматургов, а также перевод пьес с русского и на русский язык.
      </p>
      <p className={cx('desc')}>
        Если вы хотите организовывать читки или мероприятия, связанные с современной русскоязычной драматургией, напишите нам. Мы открыты для сотрудничества.
      </p>
    </aside>
  </section>
);
