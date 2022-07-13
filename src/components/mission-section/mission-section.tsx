import { FC } from 'react';
import cn from 'classnames';

import TextItem from '../mission-text-item';

import style from './mission-section.module.css';

interface ITextItemData {
  id: number;
  number: string;
  title: string;
  text: Array<string>;
}

export interface TextSectionData {
  id: number;
  number: string;
  title: string;
  image: string;
  content: Array<ITextItemData>;
}

interface TextSectionProps {
  data: TextSectionData
}

const TextSection: FC<TextSectionProps> = ({ data }) => {
  const { number, title, image, content } = data;

  return (
    <section className={style.section}>
      <div className={style.container}>
        <img
          className={style.picture}
          src={image}
          alt=""
        />
        <div className={style.list}>
          <p className={cn(style.paragraph, style.numberBox)}>
            {number}
          </p>
          <h2 className={cn(style.title, style.titleBox)}>
            {title}
          </h2>
          {content.map((el) => (
            <TextItem key={el.id} number={el.number} title={el.title}>
              {el.text.map((item, index) => (
                <p
                  key={index}
                  className={cn(style.paragraph, style.paragraphText)}
                >
                  {item}
                </p>
              ))}
            </TextItem>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TextSection;
