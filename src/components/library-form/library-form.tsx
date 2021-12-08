import React, { FC, useState, ChangeEvent, FocusEvent, useCallback, useEffect } from 'react';

import { Button } from 'components/ui/button';

import style from './library-form.module.css';

const LibraryForm: FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const [urlQuery, setUrlQuery] = useState<string>('');

  const [url, setUrl] = useState<string>('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  }, []);

  const shapeQuery = (e: FocusEvent<HTMLInputElement>): void => {
    setUrlQuery(encodeURI(`?q=${e.target.value}`));
  };

  useEffect ( () => {
    setUrl(document.URL.slice(0, document.URL.indexOf('/library')));
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
        onBlur={shapeQuery}
        placeholder='Автор или название пьесы'
      />
      <Button label='Искать' size='s' icon='arrow-right'
        iconPlace='left' border='none' isLink={true}
        href={`${url}/library/search-result${urlQuery}`} align='start' className={style.button}/>
    </form>
  );
};

export default LibraryForm;
