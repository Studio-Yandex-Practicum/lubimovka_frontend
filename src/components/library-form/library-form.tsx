import React, { FC, useState, ChangeEvent, FormEvent } from 'react';

import Arrow from './images/arrow.svg';

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
        <button
          type='submit'
          className={style.submitButton}
          disabled={!searchInput && true}
        >
          <Arrow className={style.submitIcon} />
          ИСКАТЬ
        </button>
      </form>
    </div>
  );
};

export default LibraryForm;
