import React, { FC, useState, useEffect } from 'react';
import cn from 'classnames';

import style from './library-filter.module.css';

const mockYears = ['2020', '2010', '2000', '1994', '1990'];

const mockProgrammes = ['шорт-лист', 'внеконкурсная программа', 'fringe-программа',
  'лонг-лист акции 7х7', 'Lark + Любимовка'];

const LibraryFilter: FC = () => {
  return (
    <div className={style.container}></div>
  );
};

export default LibraryFilter;
