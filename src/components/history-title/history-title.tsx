import { FC } from 'react';
import cn from 'classnames';
import {Button} from '../ui/button/button';

import style from './history-title.module.css';
interface TextItemData {
  subtitle: string
  text?: string
  href?: string
  iconPlace?: 'right'
  icon?:'arrow-right'
  align?:'start'
  width?: '81px'
  size?: 'l'
  gap?: '0'
}
interface IHistoryTitle {
  data: {
    content: Array<TextItemData>,
    urlImage: string,
    dataSubtitle: string,
    dataText: string,
    content1: Array<TextItemData>,
    content2: Array<TextItemData>
  }
}
const cx = cn.bind(style);
const HistoryTitle: FC<IHistoryTitle>= ({ data }) => {
  const { content,urlImage, dataSubtitle, dataText, content1, content2 } = data;
  return (
    <section className={style.section}>
      <img src={urlImage} alt="Изображение" className={style.image} />
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
                className={cx('button', 'link')}>
              </Button>
              <p className={cn(style.element)}>{el.text}</p>
            </div>
          ))}
        </div>
        <div className={style.links}>
          <div className={style.subsection}>
            <h2 className={style.subtitle}>Пьесы</h2>
            {content1.map((el, index) => (
              <Button key={index}
                label={el.subtitle}
                iconPlace={el.iconPlace}
                icon={el.icon}
                href={el.href}
                align={'start'}
                size={'l'}
                gap={'0'}>
              </Button>
            ))}
          </div>
          <div className={style.subsection}>
            <h2 className={style.subtitle}>Дополнительно</h2>
            {content2.map((el, index) => (
              <Button key={index}
                label={el.subtitle}
                iconPlace={el.iconPlace}
                icon={el.icon}
                href={el.href}
                align={'start'}
                size={'l'}
                gap={'0'}>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HistoryTitle;
