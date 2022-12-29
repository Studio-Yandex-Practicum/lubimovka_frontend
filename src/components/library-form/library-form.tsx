import React, { FC, useState, ChangeEvent, FormEvent, useCallback } from 'react';
import { useRouter } from 'next/router';

import { Button } from 'components/ui/button';

import style from './library-form.module.css';

const LibraryForm: FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) {
      router.push(`/library/search/${query}`);
    }
  };

  return (
    <form
      noValidate
      name="searchForm"
      className={style.searchForm}
      onSubmit={handleSubmit}
    >
      <input
        name="search"
        type="text"
        spellCheck={false}
        className={style.searchInput}
        value={query}
        onChange={handleChange}
        placeholder="Автор или название пьесы"
      />
      <Button
        label="Искать"
        size="s"
        icon="arrow-right"
        type="submit"
        iconPlace="left"
        border="none"
        isLink={Boolean(query)}
        href={`/library/search/${query}`}
        align="start"
        disabled={!query}
        className={style.button}
      />
    </form>
  );
};

export default LibraryForm;
