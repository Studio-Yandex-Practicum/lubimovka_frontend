import React, { FC, useState, ChangeEvent, FormEvent, useCallback } from 'react';
import { useRouter } from 'next/router';

import { Button } from 'components/ui/button';

import style from './library-form.module.css';

const LibraryForm: FC = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState<string>('');

  const [urlQuery, setUrlQuery] = useState<string>('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
    setUrlQuery(encodeURI(`?q=${e.target.value}`));
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    router.push(`/library/search-result${urlQuery}`);
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
        value={searchInput}
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
        isLink
        href={`/library/search-result${urlQuery}`}
        align="start"
        className={style.button}
      />
    </form>
  );
};

export default LibraryForm;
