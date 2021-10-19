import { FC } from 'react';
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
    content: TextItemData[]
  }
}

const HistoryHeader: FC<IHistoryHeaderProps> = ({ data }) => {
  const { content } = data;
  return (
    <section className={style.section}>
      <div className={style.list}>
        <Menu type="history">
          {content.map((el) => (
            <MenuItem  key={el.id} href={'#'} current={el.active}>
              {el.year}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </section>
  );
};
export default HistoryHeader;
