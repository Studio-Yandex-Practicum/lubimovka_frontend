import React, { FC, useEffect, useReducer } from 'react';

import { Droplist } from 'components/ui/droplist';
import { Tag } from 'components/ui/tag';
import { Button } from 'components/ui/button';

import reducer from './library-filter-reducer';

import style from './library-filter.module.css';

const mockYears = ['2020', '2010', '2000', '1994', '1990'];

const mockProgrammes = ['шорт-лист', 'внеконкурсная программа', 'fringe-программа',
  'лонг-лист акции 7х7', 'Lark + Любимовка'];

const LibraryFilter: FC = () => {
  const filterInitialState = { years: [], programmes: [] };

  const [filterState, filterDispatcher] = useReducer(
    reducer,
    filterInitialState,
    undefined
  );

  const handleTagClick = (el: string): void => {
    if (!filterState.programmes.find((i) => i === el)) {
      filterDispatcher({ type: 'add programme', payload: { programme: el, years: []} });
    } else {
      filterDispatcher({ type: 'remove programme', payload: { programme: el, years: []} });
    }
  };

  const handleResetClick = (): void => {
    filterDispatcher({ type: 'reset', payload: { programme: '', years: [] } });
  };

  useEffect(() => {
    console.log(filterState);
  }, [filterState]);

  return (
    <div className={style.container}>
      <div className={style.years}>
        <h2 className={style.title}>Годы фестиваля</h2>
        <Droplist type='years' cb={selectList => {
          filterDispatcher({ type: 'add years', payload: { programme: '', years: selectList } });
        }} data={mockYears}
        />
      </div>
      <div className={style.programmes}>
        <h2 className={style.title}>Программа</h2>
        <ul className={style.programmesList}>
          {mockProgrammes.map((el, id) => (
            <li onClick={() => handleTagClick(el)} className={style.programme} key={id}>
              <Tag label={el} selected={filterState.programmes.includes(el)}/></li>
          ))}
        </ul>
      </div>
      {(filterState.years.length > 0 || filterState.programmes.length > 0) &&
      <Button onClick={handleResetClick} label='Очистить' size={'s'} icon={'cross'}
        iconPlace={'left'} border={'bottomLeft'} width={'143px'} align={'start'}
        gap={'3px'} />
      }
    </div>
  );
};

export default LibraryFilter;
