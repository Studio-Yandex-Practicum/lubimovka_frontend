import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState, useReducer } from 'react';
import Error from 'next/error';
import Head from 'next/head';

import { AppLayout } from 'components/app-layout';
import LibraryPage from 'components/library-pieces-page';
import { fetcher } from 'shared/fetcher';
import { PaginatedPlayList, Play } from 'api-typings';
import reducer, { State } from 'components/library-filter/library-filter-reducer';
import queryParser from './library-query-parser';
import CurrentFiltersContext from './library-filters-context';

export interface IProgram {
  'pk': number,
  'name': string
}

export interface IPiecesFiltersProps {
  years: Array<number[]>;
  programs: Array<IProgram>;
}

interface IPiecesProps extends IPiecesFiltersProps {
  errorCode?: number;
  pieces: Play[];
  defaultState: State
}

const getArrayFromQuery = (value?:string|string[])  => Array.isArray(value) ? value : value?.split(',') || [];

const Library = ({ errorCode, pieces, years, programs,defaultState }:
  InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [piecesState, setPiecesState] = useState<Play[]>(pieces);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [filterState, filterDispatcher] = useReducer(
    reducer,
    defaultState,
    undefined
  );

  useEffect(() => {
    setIsLoading(true);
    const parsedQuery = queryParser(filterState);
    const urlWithQuery = parsedQuery ? `/library/?${parsedQuery}` : '/library/';

    fetchPieces(parsedQuery)
      .then(res => {
        window.history.replaceState('/library', document.title, urlWithQuery);

        setPiecesState(res);
        setIsLoading(false);
      })
      .catch(() => {
        setPiecesState(pieces);
        setIsLoading(false);
      });
  }, [pieces, filterState]);

  if (errorCode) {
    return (
      <Error statusCode={errorCode}/>
    );
  }

  return (
    <CurrentFiltersContext.Provider value={filterState}>
      <AppLayout>
        <Head>
          <title>Библиотека</title>
        </Head>
        <LibraryPage isLoading={isLoading} items={piecesState} years={years.flat()}
          programmes={programs.flat()} filterDispatcher={filterDispatcher}/>
      </AppLayout>
    </CurrentFiltersContext.Provider>
  );
};

const fetchPieces = async (parsedQuery?: string) => {
  const path = parsedQuery ? `/library/plays/?${parsedQuery}` : '/library/plays/';

  try {
    const { results } = await fetcher<PaginatedPlayList>(path);
    if(!results) {
      throw 'no results';
    }
    return results;
  } catch (error) {
    throw error;
  }
};

const fetchPiecesFilters = async () => {
  try {
    const { years, programs } = await fetcher<IPiecesFiltersProps>('/library/playfilters/');
    if(!years || !programs) {
      throw 'no results';
    }
    return { years, programs };
  } catch (error) {
    throw error;
  }
};

export const getServerSideProps: GetServerSideProps<IPiecesProps> = async ({ query }) => {
  const defaultState:State = {
    festival: getArrayFromQuery(query.festival),
    program: getArrayFromQuery(query.program) };
  try {
    const { years, programs } = await fetchPiecesFilters();

    return {
      props: {
        pieces: await fetchPieces(),
        defaultState,
        years,
        programs
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: 500,
        pieces: [],
        years: [],
        programs: [],
        defaultState: { festival: [], program: [] }
      }
    };
  }
};

export default Library;
