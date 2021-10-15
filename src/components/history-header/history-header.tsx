import { FC } from 'react';
import cn from 'classnames';
import { Menu } from 'components/ui/menu';
import { MenuItem } from 'components/ui/menu/item';
import style from './history-header.module.css';

interface TextItemData {
  id: number
  year: number
  active?: boolean
}
interface IHistoryHeaderProps {
  data: {
    content: Array<TextItemData>
  }
}

const HistoryHeader: FC<IHistoryHeaderProps> = ({ data }) => {
  const { content } = data;
  return (
    <section className={style.section}>
      <div className={style.list}>
        <Menu type="main-navigation">
          {content.map((el) => (
            <MenuItem  key={el.id} href={'#'} current={el.active}>
              <p className={cn(style.element)}>{el.year.toString()}</p></MenuItem>
          ))}
        </Menu>
      </div>
    </section>
  );
};
export default HistoryHeader;
