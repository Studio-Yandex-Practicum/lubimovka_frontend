import { FC } from 'react';
import cn from 'classnames';

import TextItem from '../ideology-text-item';

import style from './ideology-section.module.css';

interface TextItemData {
  id: number
  number: string
  title: string
  text: Array<string>
}

interface TextSectionProps {
  isSectionSecond: boolean
  number: string
  title: string
  data: Array<TextItemData>
}

const TextSection: FC<TextSectionProps> = (props) => {
  const { isSectionSecond, number, title, data } = props;

  return (
    <section className={style.section}>
      <div className={isSectionSecond ? cn(style.container, style.containerSecond) : style.container}>
        <article className={isSectionSecond ? cn(style.picture, style.pictureAudience) : cn(style.picture, style.pictureActors)} />
        <div className={isSectionSecond ? style.list : cn(style.list, style.listShiftRight)}>
          <p className={cn(style.paragraph, style.numberBox)}>{number}</p>
          <h2 className={cn(style.title, style.titleBox)}>{title}</h2>
          {data.map((el) => (
            <TextItem key={el.id} number={el.number} title={el.title}>
              {el.text.map((item, index) => (
                <p key={index} className={cn(style.paragraph, style.paragraphText)}>{item}</p>
              ))}
            </TextItem>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TextSection;
