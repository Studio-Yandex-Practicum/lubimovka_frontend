import { FC } from 'react';
import cn from 'classnames';
import {Button} from 'components/ui/button/button';

import style from './history-title.module.css';
interface TextItemData {
  subtitle: string
  text?: string
  href?: string
}
interface IHistoryTitle {
  data: {
    content: Array<TextItemData>,
    urlImage: string,
    dataSubtitle: string,
    dataText: string,
    plays: Array<TextItemData>,
    additionally: Array<TextItemData>
  }
}
const HistoryTitle: FC<IHistoryTitle>= ({ data }) => {
  const { content,urlImage, dataSubtitle, dataText, plays, additionally } = data;
  const iconPlace = 'right';
  const icon = 'arrow-right';
  const alignSpace = 'space-between';
  const alignStart = 'start';
  return (
    <section className={style.section}>
      <img src={urlImage} alt="Изображение" className={style.image} />
      <div className={style.content}>
        <h2 className={cn(style.dataSubtitle)}>{dataSubtitle}</h2>
        <p className={cn(style.datatext)}>{dataText}</p>
        <div className={cn(style.gridcontent)}>
          {content.map((el, index) => (
            <div key={index} className={cn(style.card)}>
              {el.href ?
                <Button
                  label={el.subtitle}
                  iconPlace={iconPlace}
                  icon={icon}
                  href={el.href}
                  align={alignSpace}
                  width={'106px'}
                  size={'l'}
                  gap={'0'}
                  className={cn(style.button, style.link, style.title)}>
                </Button> :
                <Button
                  label={el.subtitle}
                  align={alignStart}
                  width={'106px'}
                  size={'l'}
                  gap={'0'}
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
              <Button key={index}
                label={el.subtitle}
                iconPlace={iconPlace}
                icon={icon}
                href={el.href}
                align={alignStart}
                size={'l'}
                gap={'8px'}
                className={cn(style.button, style.link, style.subtitle)}>
              </Button>
            ))}
          </div>
          <div className={style.subsection}>
            <h2 className={style.subtitle}>Дополнительно</h2>
            {additionally.map((el, index) => (
              <Button key={index}
                label={el.subtitle}
                iconPlace={iconPlace}
                icon={icon}
                href={el.href}
                align={alignStart}
                size={'l'}
                gap={'8px'}
                className={cn(style.button, style.link, style.subtitle)}>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HistoryTitle;
