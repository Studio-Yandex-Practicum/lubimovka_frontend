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
    headerContent: TextItemData[]
  },
  selectYear: (year: number | undefined) => void
}

export const HistoryHeader: FC<IHistoryHeaderProps> = ({ data, selectYear }) => {
  const { headerContent } = data;
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const el = event.target as HTMLInputElement;
    const id : number = Number(el.getAttribute('id'));
    const result : TextItemData | undefined = headerContent.find(el => el.id === id);
    const year: number | undefined = result?.year;
    if(result) {
      selectYear(year);
    }
  };
  return (
    <section className={style.section}>
      <div className={style.list}>
        <Menu type='history'>
          {headerContent.map((el) => (
            <MenuItem  key={el.id} href='#' current={el.active}>
              <div onClick={handleClick} id={el.id.toString()}>
                {el.year}
              </div>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </section>
  );
};

