import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState, useReducer } from 'react';
import Error from 'next/error';
import Head from 'next/head';

import AppLayout from 'components/app-layout';
import LibraryPage from 'components/library-pieces-page';
import { fetcher } from 'shared/fetcher';
import { PaginatedPlayList, Play } from 'api-typings';
import reducer from 'components/library-filter/library-filter-reducer';
import queryParser from './library-query-parser';
import CurrentFiltersContext from './library-filters-context';

export interface IPiecesFiltersProps {
  years: Array<number[]>;
  programs: Array<string[]>;
}

interface IPiecesProps extends IPiecesFiltersProps {
  errorCode?: number;
  pieces: Play[];
}

const filterInitialState = { years: [], programmes: [] };

const Library = ({ errorCode, pieces, years, programs }:
  InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [piecesState, setPiecesState] = useState<Play[]>(pieces);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [filterState, filterDispatcher] = useReducer(
    reducer,
    filterInitialState,
    undefined
  );

  useEffect(() => {
    setIsLoading(true);
    const parsedQuery = queryParser(filterState);

    fetchPieces(parsedQuery).then(res => {
      setPiecesState(res);
      setIsLoading(false);
    }).catch(() => {
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
  const path = parsedQuery ? `/library/plays${parsedQuery}` : '/library/plays';

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
    const { years, programs } = await fetcher<IPiecesFiltersProps>('/library/playfilters');
    if(!years || !programs) {
      throw 'no results';
    }
    return { years, programs };
  } catch (error) {
    throw error;
  }
};

export const getServerSideProps: GetServerSideProps<IPiecesProps> = async () => {
  try {
    const { years, programs } = await fetchPiecesFilters();

    return {
      props: {
        pieces: await fetchPieces(),
        years: years,
        programs: programs
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: 500,
        pieces: [],
        years: [],
        programs: []
      }
    };
  }
};

export default Library;
