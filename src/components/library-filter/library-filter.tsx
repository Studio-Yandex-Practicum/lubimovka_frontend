import React, { FC, useState, useEffect } from 'react';

import { Droplist } from 'components/ui/droplist';
import { Tag } from 'components/ui/tag';
import { Button } from 'components/ui/button';

import style from './library-filter.module.css';

const mockYears = ['2020', '2010', '2000', '1994', '1990'];

const mockProgrammes = ['шорт-лист', 'внеконкурсная программа', 'fringe-программа',
  'лонг-лист акции 7х7', 'Lark + Любимовка'];

const LibraryFilter: FC = () => {
  const [years, setYears] = useState<string[]>([]);
  const [programmes, setProgrammes] = useState<string[]>([]);

  const handleClick = (el: string): void => {
    if (!programmes.find((i) => i === el)) {
      setProgrammes([...programmes, el]);
    } else {
      setProgrammes(programmes.filter((i) => i !== el));
    }
  };

  const reset = (): void => {
    setYears([]);
    setProgrammes([]);
  };

  useEffect(() => {
    console.log(programmes);
  }, [programmes]);

  useEffect(() => {
    console.log(years);
  }, [years]);

  return (
    <div className={style.container}>
      <div className={style.years}>
        <h2 className={style.title}>Годы фестиваля</h2>
        <Droplist type='years' cb={years => {
          setYears(years);}} data={mockYears}
        />
      </div>
      <div className={style.programmes}>
        <h2 className={style.title}>Программа</h2>
        <ul className={style.programmesList}>
          {mockProgrammes.map((el, id) => (
            <li onClick={() => handleClick(el)} className={style.programme} key={id}>
              <Tag label={el} selected={programmes.includes(el)}/></li>
          ))}
        </ul>
      </div>
      {(years.length > 0 || programmes.length > 0) &&
      <Button label='Очистить' onClick={reset} size={'s'} icon={'cross'}
        iconPlace={'left'} border={'bottomLeft'} width={'128px'} align={'start'}
        gap={'3px'} />
      }
    </div>
  );
};

export default LibraryFilter;
