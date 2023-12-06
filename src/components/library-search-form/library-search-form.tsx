import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useCallback, useEffect,useRef, useState } from 'react';

import { Icon } from 'components/ui/icon';

import styles from './library-search-form.module.css';

const SEARCH_QUERY_MIN_LENGTH = 2;

const cx = classNames.bind(styles);

export const LibrarySearchForm: React.VFC = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const inputElRef = useRef<HTMLInputElement>(null);

  const handleQueryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/library/search/${query}`);
  };

  const canSubmit = query.length >= SEARCH_QUERY_MIN_LENGTH;

  useEffect(() => inputElRef.current?.focus(), [router.asPath]);

  return (
    <form
      className={cx('root')}
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        ref={inputElRef}
        className={cx('input')}
        type="text"
        spellCheck={false}
        value={query}
        onChange={handleQueryChange}
        placeholder="Автор или название пьесы"
      />
      <button
        className={cx('submit-button')}
        type="submit"
        disabled={!canSubmit}
      >
        <span className={cx('submit-button-icon')}>
          <Icon
            glyph="arrow-right"
            width="100%"
            height="100%"
          />
        </span>
        Искать
      </button>
    </form>
  );
};
