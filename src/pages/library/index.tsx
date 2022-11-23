import { useEffect, useState, useReducer, useRef } from 'react';

import { AppLayout } from 'components/app-layout';
import LibraryPage from 'components/library-pieces-page';
import { SEO } from 'components/seo';
import { fetcher } from 'services/fetcher';
import reducer from 'components/library-filter/library-filter-reducer';
// TODO: непонятно, зачем нам еще одна реализация, если утилита есть в пакете funbox/diamonds
// причем сейчас queryParser делает все противоположно своему названию — превращает объект в строку
// и лежит хелпер внутри компонента, нужно унести
import queryParser from 'components/library-pieces-page/library-query-parser';
import LibraryFiltersProvider from 'providers/library-filters-provider';
import { InternalServerError } from 'shared/helpers/internal-server-error';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import type { PaginatedPlayList, Play, PlayFilters } from '__generated__/api-typings';

// TODO: скорее всего, этому интерфейсу здесь не место, потому что он никак не используется
export interface IProgram {
  'pk': number,
  'name': string
}

const Library = ({ pieces, years, programs, defaultState }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const isInitial = useRef<boolean>(true); //  TODO: Судя по неймингу, эта переменная нужна, чтобы скипнуть первый рендер в useEffect, но в проекте есть хук для этого
  const [piecesState, setPiecesState] = useState<Play[]>(pieces);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filterState, filterDispatcher] = useReducer(reducer, defaultState);

  useEffect(() => {
    if(isInitial.current) {
      isInitial.current = false;
      return;
    }

    setIsLoading(true);

    const searchParams = {
      ...filterState,
      festival: filterState.festival.map(({ text }) => text),
    };

    // TODO: тут нужен рефакторинг. Сча вообще не понятно, почему мы не можем просто `/library?${query}`, где query — или undefined или строка параметров запроса с ?
    const parsedQuery = queryParser(searchParams);
    const urlWithQuery = parsedQuery ? `/library?${parsedQuery}` : '/library/';

    fetchPlays(searchParams)
      .then((response) => {
        window.history.replaceState('/library', document.title, urlWithQuery);
        setPiecesState(response);
        setIsLoading(false);
      })
      .catch(() => {
        // TODO: Хм, а мы не хотим, например, показать 500, если запрос завершился ошибкой?
        setPiecesState(pieces);
        setIsLoading(false);
      });
  }, [pieces, filterState]);

  return (
    <LibraryFiltersProvider value={filterState}>
      <AppLayout>
        <SEO title="Пьесы"/>
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

// TODO: Record<string, string[] – повзаимствовал из типов queryParser, но здесь нужен рефакторинг
async function fetchPlays(params: Record<string, string[]>) {
  const parsedQuery = queryParser(params);
  // TODO: сходу не разобрался, почему в сгенерированных типах поля PaginatedPlayList не обязательные, добавил Required в качестве временного решения
  // ?limit=50 временный костыль по просьбе бекенда на время, пока не реализован бесконечный скролл
  const { results } = await fetcher<Required<PaginatedPlayList>>(`/library/plays/?limit=50${parsedQuery ? `&${parsedQuery}` : ''}`);

  return results;
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const {
    program,
    festival
  } = query;

  const programState = (typeof program === 'string' && program.split(',')) || [];
  const festivalState = (typeof festival === 'string' && festival.split(',')) || [];

  let years;
  let programs;
  let results;

  try {
    ({ years, programs } = await fetcher<PlayFilters>('/library/playfilters/'));
    // TODO: разобраться почему поля в сгенерированных типах необязательные
    results = await fetchPlays({ festival: festivalState, program: programState });
  } catch (error) {
    throw new InternalServerError();
  }

  return {
    props: {
      years: years.map((year) => ({
        value: year,
        text: year.toString(),
      })),
      // TODO: нейминг максимально непрозрачный, без чтения кода невозможно понять, что значит pieces
      pieces: results,
      defaultState: {
        program: programState,
        festival: festivalState.map(el=>({
          value: Number(el),
          text: el,
        })),
      },
      programs,
    }
  };
};

export default Library;
