import type { FC } from 'react';

import style from './history-itself.module.css';

interface ImageItemData {
  imageUrl1: string
  imageUrl2: string
  imageUrl3: string
}

interface IHistoryItself {
  data: {
    historyImages: ImageItemData
  }
}

export const HistoryItself: FC<IHistoryItself>= ({ data }) => {
  const { historyImages } = data;

  return (
    <section className={style.section}>
      <div className={style.contentTop}>
        <img
          src={historyImages.imageUrl1}
          alt="изображение"
          className={style.imageTitle}
        />
        <div className={style.contentTopTitle}>
          <h1 className={style.title}>
            История фестиваля
          </h1>
          <p className={style.text}>
            Фестиваль молодой драматургии «Любимовка» был основан в 1990 году известными российскими драматургами и критиками - Михаилом Рощиным, Алексеем Казанцевым, Виктором Славкиным, Владимиром Гуркиным, Юрием Рыбаковым, Инной Громовой, Маргаритой Светлаковой, Марией Медведевой, и другими. Фестиваль был задуман как некоммерческий, независимый проект, созданный для знакомства всех заинтересованных с новыми пьесами.
          </p>
        </div>
      </div>
      <p className={style.text1}>
        «Любимовка» родилась как лаборатория, позволявшая дебютанту не только публично показать свой текст, но и услышать мнения и советы профессионалов – на фестивале встречаются и обмениваются опытом авторы разных поколений и статусов.
      </p>
      <p className={style.text2}>
        Изначально фестиваль проводился в исторической усадьбе Станиславского «Любимовка». В 1995 - 2000 годах в оргкомитет вошли драматурги Елена Гремина, Ольга Михайлова, Михаил Угаров, Елена Исаева, Ксения Драгунская, Максим Курочкин. В 2000 году директором фестиваля стал Александр Родионов. С 2001 года фестиваль проходит в Москве. С самого своего возникновения фестиваль тесно сотрудничал с журналом «Драматург», Центром Драматургии и Режиссуры под руководством А. Казанцева и М. Рощина, с проектом «Новая драма» и журналом «Современная драматургия».
      </p>
      <div className={style.contentBottom}>
        <img
          src={historyImages.imageUrl2}
          alt="изображение"
          className={style.image}
        />
        <img
          src={historyImages.imageUrl3}
          alt="изображение"
          className={style.image}
        />
      </div>
      <p className={style.text2}>
        С 2007 года «Любимовка» на постоянной основе «прописалась» в Театре.DOC. Арт-директором и мотором фестиваля стала Елена Ковальская, театральный критик и редактор раздела «Театр» журнала «Афиша», позже - директор театрального Центра им. Вс. Мейерхольда. Под её руководством и при поддержке драматурга и сценариста Александра Родионова, театрального критика Кристины Матвиенко, драматурга и режиссёра Михаила Угарова фестиваль обрёл новое дыхание и форму, которую старалась поддержать и развивать новая команда, взявшая на себя организацию «Любимовки» в 2013 году: драматурги Михаил Дурненков, Евгений Казачков, театровед Анна Банасюкевич. Фестиваль получил юридический статус, началось сотрудничество с Фондом Михаила Прохорова, стали развиваться международные проекты, появилась Fringe-программа.
      </p>
      <p className={style.text2}>
        В 2019 году произошла очередная смена арт-дирекции фестиваля - организаторами «Любимовки» стали драматурги Нина Беленицкая, Олжас Жанайдаров, Мария Огнева, театровед Полина Пхор и режиссёр Юрий Шехватов. «Любимовка» в эти годы стала перемещаться по разным театральным площадкам Москвы, появились онлайн-трансляции, был создан новый сайт.
      </p>
      <p className={style.text2}>
        Более подробно об истории, знаковых пьесах, памятных событиях фестиваля можно прочитать в специальном номере журнала «Театр.» (№48), который вышел в 2022 году. Это первая за тридцать лет существования «Любимовки» попытка сохранить всю хронологию и программы, увидеть весь объём фестиваля как явления культуры.
        Прочитать журнал можно
        {' '}
        <a
          className={style.link}
          href="https://lubimovka.art/media/filer_public/9d/7b/9d7b8913-b0fe-4adf-9abf-b2e6de119b98/theatre_48.pdf"
          target="_blank"
          rel="noreferrer"
        >
          здесь
        </a>
        .
      </p>
      <div className={style.contentBottom}>
        <img
          src="/images/history/theatre-magazine.jpeg"
          alt="Журнал «Театр», №48"
          className={style.imageBottom}
        />
      </div>
    </section>
  );
};
