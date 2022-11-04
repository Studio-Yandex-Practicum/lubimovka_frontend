import React, { FC, useState, ChangeEvent, FormEvent, useCallback } from 'react';
import { useRouter } from 'next/router';

import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';

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
    if(urlQuery) {
      router.push(`/library/search-result${urlQuery}`);
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
        value={searchInput}
        onChange={handleChange}
        placeholder="Автор или название пьесы"
      />
      <Button
        size="s"
        type="submit"
        border="none"
        icon={(
          <Icon
            glyph="arrow-right"
            width="100%"
            height="100%"
          />
        )}
        style={{ textTransform: 'uppercase' }}
        iconPosition="left"
        href={`/library/search-result${urlQuery}`}
        disabled={!urlQuery}
      >
        Искать
      </Button>
    </form>
  );
};

export default LibraryForm;
