import React, { FC } from 'react';

import { Droplist } from 'components/ui/droplist';
import { Tag } from 'components/ui/tag';

import style from './library-filter.module.css';

const mockYears = ['2020', '2010', '2000', '1994', '1990'];

const mockProgrammes = ['шорт-лист', 'внеконкурсная программа', 'fringe-программа',
  'лонг-лист акции 7х7', 'Lark + Любимовка'];

const LibraryFilter: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.years}>
        <h2 className={style.title}>Годы фестиваля</h2>
        <Droplist type='years' cb={string => {
          console.log(string);}} data={mockYears}
        />
      </div>
      <div className={style.programmes}>
        <h2 className={style.title}>Программа</h2>
        <ul className={style.programmesList}>
          {mockProgrammes.map((el, id) => (
            <li className={style.programme} key={id}><Tag label={el} selected={false}/></li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default LibraryFilter;
