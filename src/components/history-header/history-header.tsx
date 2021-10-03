import { FC } from 'react';
import cn from 'classnames';

import style from './history-header.module.css';

interface TextItemData {
  id: number
  year: number
}
interface IHistoryHeaderProps {
  data: {
    id: number
    content: Array<TextItemData>
  }
}

const HistoryHeader: FC<IHistoryHeaderProps> = ({ data }) => {
  const { content } = data;
  return (
    <section className={style.section}>

      <div className={style.list}>
        {content.map((el) => (
          <p className={cn(style.element)} key={el.id}>{el.year}</p>
        ))}


      </div>
    </section>
  );
};
export default HistoryHeader;
