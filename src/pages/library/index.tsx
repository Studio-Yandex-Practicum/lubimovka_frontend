import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState, useReducer, useRef } from 'react';
import Error from 'next/error';

import { AppLayout } from 'components/app-layout';
import LibraryPage from 'components/library-pieces-page';
import { SEO } from 'components/seo';
import { fetcher } from 'services/fetcher';
import type { PaginatedPlayList, Play } from 'api-typings';
import reducer from 'components/library-filter/library-filter-reducer';
import type { State } from 'components/library-filter/library-filter-reducer';
import queryParser from '../../components/library-pieces-page/library-query-parser';
import LibraryFiltersProvider from 'providers/library-filters-provider';
import type { DroplistOption } from '../../components/ui/droplist';

export interface IProgram {
  'pk': number,
  'name': string
}

export interface IPiecesFiltersProps {
  years: DroplistOption[];
  programs: Array<IProgram>;
  defaultState: State;
}

interface IPiecesProps extends IPiecesFiltersProps {
  errorCode?: number;
  pieces: Play[];
}

const Library = ({ errorCode, pieces, years, programs, defaultState }:
  InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const isInitial = useRef<boolean>(true);
  const [piecesState, setPiecesState] = useState<Play[]>(pieces);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [filterState, filterDispatcher] = useReducer(
    reducer,
    defaultState,
    undefined
  );

  useEffect(() => {
    if(isInitial.current) {
      isInitial.current = false;
      return;
    }
    setIsLoading(true);
    const parsedQuery = queryParser({ ...filterState, festival: filterState.festival.map(({ text })=>text) });
    const urlWithQuery = parsedQuery ? `/library?${parsedQuery}` : '/library/';

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
    <LibraryFiltersProvider value={filterState}>
      <AppLayout>
        <SEO
          title="Библиотека - пьесы"
        />
        <LibraryPage
          isLoading={isLoading}
          items={piecesState}
          years={years.flat()}
          programmes={programs.flat()}
          filterDispatcher={filterDispatcher}
        />
      </AppLayout>
    </LibraryFiltersProvider>
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
    return { years: years.map(value => ({ value: Number(value), text:String(value) })), programs };
  } catch (error) {
    throw error;
  }
};

export const getServerSideProps: GetServerSideProps<IPiecesProps> = async (context) => {
  try {
    const [{ years, programs },pieces] = await Promise.all([fetchPiecesFilters(),fetchPieces()]);
    const { program,festival } = context.query;
    const programState = (typeof program === 'string' && program.split(',')) || [];
    const festivalState = (typeof festival === 'string' && festival.split(',')) || [];
    return {
      props: {
        pieces,
        years,
        programs,
        defaultState: {
          program: programState,
          festival: festivalState.map(el=>({ text: el, value: Number(el) })),
        }
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: 500,
        pieces: [],
        years: [],
        programs: [],
        defaultState: {
          program: [],
          festival: [],
        }
      }
    };
  }
};

export default Library;
