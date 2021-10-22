import { FC } from 'react';
import cn from 'classnames';
import { Button } from 'components/ui/button/button';

import style from './history-title.module.css';
interface TextItemData {
  subtitle: string
  text?: string
  url?: string
}
interface IHistoryTitle {
  data: {
    content: TextItemData[],
    imageUrl: string,
    dataSubtitle: string,
    dataText: string,
    plays: TextItemData[],
    additionally: TextItemData[]
  }
}
const iconPlace = 'right';
const icon = 'arrow-right';
const alignSpace = 'space-between';
const alignStart = 'start';

export const HistoryTitle: FC<IHistoryTitle>= ({ data }) => {
  const { content, imageUrl, dataSubtitle, dataText, plays, additionally } = data;

  return (
    <section className={style.section}>
      <img src={imageUrl} alt='Изображение' className={style.image} />
      <div className={style.content}>
        <h2 className={cn(style.dataSubtitle)}>{dataSubtitle}</h2>
        <p className={cn(style.datatext)}>{dataText}</p>
        <div className={cn(style.gridcontent)}>
          {content.map((el, index) => (
            <div key={index} className={cn(style.card)}>
              {el.url ?
                <Button
                  label={el.subtitle}
                  iconPlace={iconPlace}
                  icon={icon}
                  href={el.url}
                  align={alignSpace}
                  width='106px'
                  size='l'
                  gap='0'
                  className={cn(style.button, style.link, style.title)}>
                </Button> :
                <Button
                  label={el.subtitle}
                  align={alignStart}
                  width='106px'
                  size='l'
                  gap='0'
                  className={cn(style.button, style.link, style.title)}>
                </Button>}
              <p className={cn(style.element)}>{el.text}</p>
            </div>
          ))}
        </div>
        <div className={style.links}>
          <div className={style.subsection}>
            <h2 className={style.subtitle}>Пьесы</h2>
            {plays.map((el, index) => (
              <div key={index} className={style.buttonDisplay}>
                <Button
                  label={el.subtitle}
                  iconPlace={iconPlace}
                  icon={icon}
                  href={el.url}
                  align={alignStart}
                  size='l'
                  gap='8px'
                  className={cn(style.button, style.link, style.subtitle)}>
                </Button>
              </div>

            ))}
          </div>
          <div className={style.subsection}>
            <h2 className={style.subtitle}>Дополнительно</h2>
            {additionally.map((el, index) => (
              <div key={index} className={style.buttonDisplay}>
                <Button
                  label={el.subtitle}
                  iconPlace={iconPlace}
                  icon={icon}
                  href={el.url}
                  align={alignStart}
                  size='l'
                  gap='8px'
                  className={cn(style.button, style.link, style.subtitle)}>
                </Button>
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

