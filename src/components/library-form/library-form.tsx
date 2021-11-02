import React, { FC, useState, ChangeEvent, FormEvent } from 'react';

import { Button } from 'components/ui/button';

import style from './library-form.module.css';

const LibraryForm: FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className={style.container}>
      <form
        noValidate
        name='searchForm'
        className={style.searchForm}
        onSubmit={handleSubmit}
      >
        <input
          name='search'
          type='text'
          spellCheck={false}
          className={style.searchInput}
          value={searchInput}
          onChange={handleChange}
          placeholder='Введите автора или название пьесы'
        />
        <Button label='ИСКАТЬ' size={'s'} icon={'arrow-right'}
          iconPlace={'left'} border={'bottomLeft'} width={'120px'} isLink={true}
          href='/library/search-result' align={'start'} gap={'3px'} />
      </form>
    </div>
  );
};

export default LibraryForm;
