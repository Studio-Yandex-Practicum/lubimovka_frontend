import { FC } from 'react';
import cn from 'classnames';
import {Button} from '../ui/button/button';

import style from './history-title.module.css';
interface TextItemData {
  subtitle: string
  text: string
  href?: string
  iconPlace?: 'right'
  icon?:'arrow-right'
  align?:'start'
  width: '81px'
  size: 'l'
  gap: '0'
  className: string
}
interface IHistoryTitle {
  data: {
    content: Array<TextItemData>
    urlImage: string
    dataSubtitle: string
    dataText: string
  }
}
const HistoryTitle: FC<IHistoryTitle>= ({ data }) => {
  const { content,urlImage, dataSubtitle, dataText } = data;
  return (
    <section className={style.section}>
      <div className={style.image} style={{background: urlImage}}></div>
      <div className={style.content}>
        <div>
          <h2 className={cn(style.dataSubtitle)}>{dataSubtitle}</h2>
          <p className={cn(style.datatext)}>{dataText}</p>
        </div>
        <div className={cn(style.gridcontent)}>
          {content.map((el, index) => (
            <div key={index} className={cn(style.card)}>
              <Button
                label={el.subtitle}
                iconPlace={el.iconPlace}
                icon={el.icon}
                href={el.href}
                align={'start'}
                width={'93px'}
                size={'l'}
                gap={'0'}
                className={cn(style.button)}/>
              <p className={cn(style.element)}>{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HistoryTitle;
