import { NextPage } from 'next';
import cn from 'classnames';

import TextItem from '../../components/ideology-text-item';

import textData from './assets/mock-data.json';

import style from './ideology.module.css';

const Ideology: NextPage = () => (
  <div className={style.page}>
    <section className={style.section}>
      <div className={style.container}>
        <article className={cn(style.picture, style.pictureActors)} />
        <div className={cn(style.list, style.listShiftRight)}>
          <p className={cn(style.paragraph, style.numberBox)}>1</p>
          <h2 className={cn(style.title, style.titleBox)}>Мы твердо верим, что</h2>
          {textData.slice(0, 3).map((el) => (
            <TextItem key={el.id} number={el.number} title={el.title}>
              {el.text.map((item, index) => (
                <p key={index} className={cn(style.paragraph, style.paragraphText)}>{item}</p>
              ))}
            </TextItem>
          ))}

        </div>
      </div>
    </section>

    <section className={cn(style.section, style.sectionSecond)}>
      <div className={cn(style.container, style.containerSecond)}>
        <article className={cn(style.picture, style.pictureAudience)} />
        <div className={style.list}>
          <p className={cn(style.paragraph, style.numberBox)}>2</p>
          <h2 className={cn(style.title, style.titleBox)}>Мы искренне хотим</h2>
          {textData.slice(3).map((el) => (
            <TextItem key={el.id} number={el.number} title={el.title}>
              {el.text.map((item, index) => (
                <p key={index} className={cn(style.paragraph, style.paragraphText)}>{item}</p>
              ))}
            </TextItem>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Ideology;
