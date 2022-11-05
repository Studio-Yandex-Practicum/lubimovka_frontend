import React, { FC, useCallback, Dispatch, useContext } from 'react';

import { Droplist, DroplistOption, } from 'components/ui/droplist';
import { Tag } from 'components/ui/tag';
import { Button } from 'components/ui/button';
import { Icon } from 'components/ui/icon';
import { Action } from 'components/library-filter/library-filter-reducer';
import { LibraryFiltersProviderContext } from 'providers/library-filters-provider';
import { IProgram } from 'pages/library';

import style from './library-filter.module.css';

export interface LibraryFilterProps {
  years: DroplistOption[];
  programmes: Array<IProgram>;
  filterDispatcher: Dispatch<Action>;
  onCheckResults?: () => void;
}

const LibraryFilter: FC<LibraryFilterProps> = ({ years, programmes, filterDispatcher, onCheckResults }) => {
  const filterState = useContext(LibraryFiltersProviderContext);

  const handleTagClick = useCallback(
    (el: string): void => {
      if (!filterState.program.find((i) => i === el)) {
        filterDispatcher({ type: 'add programme', program: el });
      } else {
        filterDispatcher({ type: 'remove programme', program: el });
      }
    }, [filterState, filterDispatcher]);

  const handleResetClick = useCallback((): void => {
    filterDispatcher({ type: 'reset' });
  }, [filterDispatcher]);

  const handleYearsClick = useCallback((years: DroplistOption): void => {
    if (!filterState.festival.find((i) => i.value === years.value)) {
      filterDispatcher({ type: 'add years', festival: years  });
    } else {
      filterDispatcher({ type: 'remove year', festival: years  });
    }
  }, [filterDispatcher, filterState.festival]);

  return (
    <div className={style.container}>
      <div className={style.years}>
        <h2 className={style.title}>
          Годы фестиваля
        </h2>
        <Droplist type="multiple" onChange={handleYearsClick} options={years} selectedOptions={filterState.festival}/>
      </div>
      <div className={style.programmes}>
        <h2 className={style.title}>
          Программа
        </h2>
        <ul className={style.programmesList}>
          {programmes.map(({ pk, name }) => (
            <li onClick={() => handleTagClick(String(pk))} className={style.programme} key={pk}>
              <Tag label={name} selected={filterState.program.includes(String(pk))}/>
            </li>
          ))}
        </ul>
      </div>

      {(filterState.festival.length > 0 || filterState.program.length > 0) && (
        <>
          <div className={style.buttonWrap}>
            <Button
              onClick={handleResetClick}
              size="s"
              icon={(
                <Icon
                  glyph="cross"
                  width="100%"
                  height="100%"
                />
              )}
              iconPosition="left"
              border="bottom-left"
              style={{ textTransform: 'uppercase', paddingLeft: '0' }}
            >
              Очистить
            </Button>
          </div>
          <div className={style.mobileButtons}>
            <Button
              onClick={handleResetClick}
              size="l"
              icon={(
                <Icon
                  glyph="cross"
                  width="100%"
                  height="100%"
                />
              )}
              iconPosition="right"
              border="full"
              style={{ textTransform: 'uppercase' }}
            >
              Очистить
            </Button>
            <Button
              onClick={onCheckResults}
              size="l"
              icon={(
                <Icon
                  glyph="arrow-right"
                  width="100%"
                  height="100%"
                />
              )}
              iconPosition="right"
              border="full"
              style={{ textTransform: 'uppercase' }}
            >
              Посмотреть
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default LibraryFilter;
