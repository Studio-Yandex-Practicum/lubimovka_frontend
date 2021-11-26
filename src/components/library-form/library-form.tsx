import React, { FC, useState, ChangeEvent, useCallback } from 'react';

import { Button } from 'components/ui/button';

import style from './library-form.module.css';

const LibraryForm: FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  }, []);

  return (
    <form
      noValidate
      name='searchForm'
      className={style.searchForm}
    >
      <input
        name='search'
        type='text'
        spellCheck={false}
        className={style.searchInput}
        value={searchInput}
        onChange={handleChange}
        placeholder='Автор или название пьесы'
      />
      <Button label='Искать' size='s' icon='arrow-right'
        iconPlace='left' border='none' isLink={true}
        href='/library/search-result' align='start' className={style.button}/>
    </form>
  );
};

export default LibraryForm;
