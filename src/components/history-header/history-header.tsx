import { FC } from 'react';
import cn from 'classnames';
import { Menu } from 'components/ui/menu';
import { MenuItem } from 'components/ui/menu/menu-item';
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

        <Menu view="sectionNavigation">
          {content.map((el) => (
            <MenuItem className={cn(style.element)} key={el.id} type={'navLink'} active={el.active}>{el.year.toString()}</MenuItem>
          ))}
        </Menu>

      </div>
    </section>
  );
};
export default HistoryHeader;
