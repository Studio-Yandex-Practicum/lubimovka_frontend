import { encode } from 'querystring';

import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { useCallback, useEffect,useMemo, useRef, useState } from 'react';

import { AppLayout } from 'components/app-layout';
import { Filter } from 'components/filter';
import { LibraryLayout } from 'components/library-layout';
import { PaginationSentinel } from 'components/pagination-sentinel';
import { PlayCard } from 'components/play-card';
import { PlayFilterDialog } from 'components/play-filter-dialog';
import { PlayList } from 'components/play-list';
import { SEO } from 'components/seo';
import { ButtonGroup } from 'components/ui/button-group';
import { Button } from 'components/ui/button2';
import { Checkbox } from 'components/ui/checkbox';
import { CheckboxGroup } from 'components/ui/checkbox-group';
import { Icon } from 'components/ui/icon';
import { MultipleSelect } from 'components/ui/multiple-select';
import { getPlayFilters,getPlays } from 'services/api/plays';
import breakpoints from 'shared/breakpoints';
import { objectMap } from 'shared/helpers/object-map';
import { remToPx } from 'shared/helpers/rem-to-px';
import { useEffectAfterMount } from 'shared/hooks/use-effect-after-mount';
import { useIntersectionObserver } from 'shared/hooks/use-intersection-observer';
import { useMediaQuery } from 'shared/hooks/use-media-query';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

type PlaysViewProps = InferGetServerSidePropsType<typeof getServerSideProps>
type FilterState = PlaysViewProps['defaultFilterState'];
type FilterParam = keyof FilterState;

const PLAYS_PER_PAGE = 28;
const RANDOM_PLAYS_COUNT = 50;
const PLAY_LIST_Y_OFFSET_IN_REM = 9.25; // TODO: здесь магическое число в качестве быстрого решения, нужен рефакторинг

enum SearchParam {
  Year = 'year',
  Program = 'program',
}

const Plays = (props: PlaysViewProps) => {
  const router = useRouter();

  const [filterState, setFilterState] = useState(props.defaultFilterState);
  const savedFilterState = useRef<FilterState>(props.defaultFilterState);

  const fetchPlaysRequestHandle = useRef({});

  const [plays, setPlays] = useState(props.plays);

  const [pagination, setPagination] = useState(props.pagination);
  const [paginationSentinelRef, shouldLoadMorePlays] = useIntersectionObserver({ rootMargin: '0px 0px 50% 0px' });

  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const FilterContainer = isMobile ? PlayFilterDialog : LibraryLayout.Slot;
  const shouldScrollPlayListOnChange = useRef(false);

  const [processing, setProcessing] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const isFiltersApplied = Object.values(filterState).some((options) => options.some((o) => o.selected));

  const handleOptionChange = useCallback((param: FilterParam, selected: boolean, option, shouldSaveFilterState = true) => {
    setFilterState((filterState) => {
      if (shouldSaveFilterState) {
        savedFilterState.current = filterState;
      }

      return {
        ...filterState,
        [param]: filterState[param].map((o) => ({ ...o, selected: o.value === option.value ? selected : o.selected }))
      };
    });
    setPagination((pagination) => ({
      ...pagination,
      currentPage: 1,
    }));
  }, []);

  const fetchPlaysDebounced = useCallback(debounce(
    async (searchParams) => {
      let result: Awaited<ReturnType<typeof getPlays>>;

      const requestHandle = {};
      fetchPlaysRequestHandle.current = requestHandle;

      setProcessing(true);

      try {
        result = await getPlays(searchParams);
      } catch {
        setErrorOccurred(true);

        return;
      }

      if (requestHandle !== fetchPlaysRequestHandle.current) {
        return;
      }

      setPlays((plays) => searchParams.offset ? plays.concat(result.plays) : result.plays);
      setPagination((pagination) => ({ ...pagination, ...result.pagination }));
      setProcessing(false);
    }, 800, { leading: true }), []);

  const selectedFilterOptions = useMemo(
    () => objectMap(filterState, (param, options) => options.filter((o) => o.selected)
    ), [filterState]);

  const resetFilters = () => {
    setFilterState(objectMap(filterState, (key, options) => options.map((o) => ({ ...o, selected: false }))));
    savedFilterState.current = filterState;
  };

  const openFilterDialog = useCallback(() => {
    savedFilterState.current = filterState;
    setFilterDialogOpen(true);
  }, [filterState]);

  const handleFilterConfirm = useCallback(() => {
    setFilterDialogOpen(false);
  }, []);

  const handleFilterCancel = useCallback(() => {
    setFilterState(savedFilterState.current);
    setFilterDialogOpen(false);
  }, []);

  useEffectAfterMount(() => {
    if (!shouldLoadMorePlays || !pagination.next) {
      return;
    }

    setPagination((pagination) => ({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    }));
  }, [shouldLoadMorePlays, pagination.next]);

  useEffectAfterMount(() => {
    if (isMobile && (isFilterDialogOpen || isEqual(savedFilterState.current, filterState))) {
      return;
    }

    const searchParamsToFilterStateMap = {
      [SearchParam.Year]: filterState.festivalYearOptions,
      [SearchParam.Program]: filterState.festivalProgramOptions,
    };

    const searchParams = {
      ...objectMap(searchParamsToFilterStateMap, (param, options) => options.filter((o) => o.selected).map((o) => o.value)),
    };

    router.replace({
      query: {
        ...router.query,
        ...searchParams,
      }
    }, undefined, { shallow: true });

    const limit = isFiltersApplied ? PLAYS_PER_PAGE : RANDOM_PLAYS_COUNT;

    fetchPlaysDebounced({
      years: searchParams.year,
      programIds: searchParams.program,
      limit,
      offset: (pagination.currentPage - 1) * limit,
    });
  }, [filterState, isFilterDialogOpen, pagination.currentPage]);

  useEffect(() => {
    shouldScrollPlayListOnChange.current = !isMobile;
  }, [isMobile]);

  useEffect(() => {
    if (!shouldScrollPlayListOnChange.current) {
      return;
    }
    const playListYOffsetInPx = remToPx(PLAY_LIST_Y_OFFSET_IN_REM);
    if (window.pageYOffset > playListYOffsetInPx) {
      window.scrollTo({ top: playListYOffsetInPx });
    }
  }, [filterState]);

  if (errorOccurred) {
    return (
      <Error statusCode={500}/>
    );
  }

  return (
    <>
      <SEO title="Пьесы"/>
      <AppLayout>
        <LibraryLayout variant="plays">
          <FilterContainer
            area="filter"
            open={isFilterDialogOpen}
            onClose={handleFilterCancel}
          >
            <Filter variant="vertical">
              <Filter.List
                caption="Годы фестиваля"
                addon={(
                  <ButtonGroup>
                    {selectedFilterOptions.festivalYearOptions.map((option) => (
                      <ButtonGroup.Item key={option.value}>
                        <Button
                          type="button"
                          pressed
                          size="s"
                          icon={(
                            <Icon
                              glyph="cross"
                              width="100%"
                              height="100%"
                            />
                          )}
                          iconPosition="right"
                          onClick={() => handleOptionChange('festivalYearOptions', false, option)}
                        >
                          {option.text}
                        </Button>
                      </ButtonGroup.Item>
                    ))}
                  </ButtonGroup>
                )}
              >
                <MultipleSelect>
                  {filterState.festivalYearOptions.map((option) => (
                    <MultipleSelect.Option key={option.value}>
                      <Checkbox
                        checked={option.selected}
                        onChange={(selected) => {
                          handleOptionChange('festivalYearOptions', selected, option);
                        }}
                      >
                        <MultipleSelect.OptionText>
                          {option.text}
                        </MultipleSelect.OptionText>
                      </Checkbox>
                    </MultipleSelect.Option>
                  ))}
                </MultipleSelect>
              </Filter.List>
              <Filter.List caption="Программа">
                <CheckboxGroup>
                  {filterState.festivalProgramOptions.map((option) => (
                    <CheckboxGroup.Item key={option.value}>
                      <Checkbox
                        variant="pseudo-button"
                        checked={option.selected}
                        onChange={(selected) => {
                          handleOptionChange('festivalProgramOptions', selected, option);
                        }}
                      >
                        {option.text}
                      </Checkbox>
                    </CheckboxGroup.Item>
                  ))}
                </CheckboxGroup>
              </Filter.List>
              {(isFiltersApplied || isMobile) && (
                <Filter.Actions>
                  {isFiltersApplied && (
                    <Button
                      type="button"
                      border="bottom-left"
                      upperCase
                      size="s"
                      icon={(
                        <Icon
                          glyph="cross"
                          width="100%"
                          height="100%"
                        />
                      )}
                      {...isMobile && {
                        fullWidth: true,
                        iconPosition: 'right',
                      }}
                      onClick={resetFilters}
                    >
                      Очистить
                    </Button>
                  )}
                  {isMobile && !isEqual(savedFilterState.current, filterState) && (
                    <Button
                      type="button"
                      border="bottom-left"
                      upperCase
                      size="s"
                      fullWidth
                      iconPosition="right"
                      icon={(
                        <Icon
                          glyph="arrow-right"
                          width="100%"
                          height="100%"
                        />
                      )}
                      onClick={handleFilterConfirm}
                    >
                      Посмотреть
                    </Button>
                  )}
                </Filter.Actions>
              )}
            </Filter>
          </FilterContainer>
          {isMobile && (
            <LibraryLayout.Slot area="filter">
              <ButtonGroup>
                {Object.entries(selectedFilterOptions).map(([param, options]) => options.map((option) => (
                  <ButtonGroup.Item key={option.value}>
                    <Button
                      type="button"
                      pressed
                      size="s"
                      icon={(
                        <Icon
                          glyph="cross"
                          width="100%"
                          height="100%"
                        />
                      )}
                      iconPosition="right"
                      onClick={() => handleOptionChange(param as FilterParam , false, option, !isFilterDialogOpen)}
                    >
                      {option.text}
                    </Button>
                  </ButtonGroup.Item>
                )))}
              </ButtonGroup>
            </LibraryLayout.Slot>
          )}
          <LibraryLayout.Slot area="content">
            <PlayList processing={processing && pagination.currentPage === 1}>
              {plays.map((play) => (
                <PlayList.Item key={play.id}>
                  <PlayCard
                    title={play.title}
                    city={play.city}
                    year={play.year}
                    readingUrl={play.readingUrl}
                    downloadUrl={play.downloadUrl}
                    authors={play.authors}
                  />
                </PlayList.Item>
              ))}
            </PlayList>
            {!processing && isFiltersApplied && (
              <PaginationSentinel ref={paginationSentinelRef}/>
            )}
          </LibraryLayout.Slot>
          {isMobile && (
            <LibraryLayout.FilterToggler
              onClick={openFilterDialog}
            />
          )}
        </LibraryLayout>
      </AppLayout>
    </>
  );
};

export default Plays;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const searchParams = new URLSearchParams(encode(ctx.query));

  const limit = Object.keys(SearchParam).some((p) => searchParams.has(SearchParam[p as keyof typeof SearchParam])) ? PLAYS_PER_PAGE : RANDOM_PLAYS_COUNT;

  const playsQueryParams = {
    years: searchParams.getAll(SearchParam.Year),
    programIds: searchParams.getAll('program'),
    limit,
  };

  const { plays, pagination } = await getPlays(playsQueryParams);
  const filters = await getPlayFilters();

  const defaultFestivalYearOptions = filters.years.map((year) => ({
    text: year,
    value: year,
    selected: searchParams.getAll(SearchParam.Year).includes(year),
  }));

  const defaultFestivalProgramOptions = filters.programs.map((program) => ({
    text: program.title,
    value: program.id,
    selected: searchParams.getAll(SearchParam.Program).includes(program.id),
  }));

  return {
    props: {
      defaultFilterState: {
        festivalYearOptions: defaultFestivalYearOptions,
        festivalProgramOptions: defaultFestivalProgramOptions,
      },
      plays,
      pagination: {
        ...pagination,
        currentPage: 1,
      }
    }
  };
};
