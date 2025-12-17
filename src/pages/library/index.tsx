import { encode } from 'querystring';

import isEqual from 'lodash/isEqual';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { useCallback, useEffect,useMemo, useRef, useState } from 'react';

import { AppLayout } from 'components/app-layout';
import { Filter } from 'components/filter';
import { InfiniteScrollTrigger } from 'components/infinite-scroll-trigger';
import { LibraryLayout } from 'components/library-layout';
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
import { useBoolean } from 'shared/hooks/use-boolean';
import { useEffectSkipMount } from 'shared/hooks/use-effect-skip-mount';
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

  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  const [filters, setFilters] = useState(props.defaultFilterState);
  const filtersSnapshot = useRef<FilterState | null>(null);

  const fetchPlaysRequestHandle = useRef({});

  const [plays, setPlays] = useState(props.plays);
  const [pagination, setPagination] = useState(props.pagination);

  const {
    value: isFiltersDialogOpen,
    setTrue: showFilterDialog,
    setFalse: closeFilterDialog,
  } = useBoolean(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const handleFilterChange = useCallback(
    (param: FilterParam, selected: boolean, option) => {
      setFilters((pendingFilters) => {
        return {
          ...pendingFilters,
          [param]: pendingFilters[param].map(
            (pendingOption) => ({
              ...pendingOption,
              selected: pendingOption.value === option.value
                ? selected
                : pendingOption.selected,
            }),
          )
        };
      });
      setPagination((pagination) => ({
        ...pagination,
        currentPage: 1,
      }));
    },
    []
  );

  const fetchPlays = async () => {
    const searchParamsToFilterStateMap = {
      [SearchParam.Year]: filters.festivalYearOptions,
      [SearchParam.Program]: filters.festivalProgramOptions,
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
    const offset = (pagination.currentPage - 1) * limit;

    let result: Awaited<ReturnType<typeof getPlays>>;

    const requestHandle = {};
    fetchPlaysRequestHandle.current = requestHandle;

    setIsLoading(true);

    try {
      result = await getPlays({
        years: searchParams.year,
        programIds: searchParams.program,
        limit,
        offset,
      });
    } catch {
      setErrorOccurred(true);

      return;
    }

    if (requestHandle !== fetchPlaysRequestHandle.current) {
      return;
    }

    setPlays((plays) => offset ? plays.concat(result.plays) : result.plays);
    setPagination((pagination) => ({ ...pagination, ...result.pagination }));
    setIsLoading(false);
  };

  const clearFilters = () => {
    setFilters(objectMap(filters, (key, options) => (
      options.map((option) => ({ ...option, selected: false })
      ))));
  };

  const handleShowFilters = () => {
    filtersSnapshot.current = filters;
    showFilterDialog();
  };

  const handleSubmitFilters = () => {
    if (!isEqual(filtersSnapshot.current, filters)) {
      fetchPlays();
    }

    filtersSnapshot.current = null;
    closeFilterDialog();
  };

  const handleLoadNeeded = useCallback(() => {
    setPagination((pagination) => ({
      ...pagination,
      currentPage: pagination.currentPage + 1,
    }));
  }, []);

  useEffectSkipMount(() => {
    if (isMobile && isFiltersDialogOpen) {
      return;
    }

    fetchPlays();
  }, [filters, pagination.currentPage]);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const playListYOffsetInPx = remToPx(PLAY_LIST_Y_OFFSET_IN_REM);

    if (window.pageYOffset > playListYOffsetInPx) {
      window.scrollTo({ top: playListYOffsetInPx });
    }
  }, [filters]);

  useEffect(() => {
    if (!isMobile && isFiltersDialogOpen) {
      handleSubmitFilters();
    }
  }, [isMobile]);

  const selectedFilterOptions = useMemo(
    () => objectMap(filters, (param, options) => options.filter((o) => o.selected)
    ), [filters]);

  const FilterContainer = isMobile ? PlayFilterDialog : LibraryLayout.Slot;
  const isFiltersApplied = Object.values(filters).some(
    (options) => options.some(({ selected }) => selected)
  );

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
            open={isFiltersDialogOpen}
            onClose={handleSubmitFilters}
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
                          size="m"
                          icon={(
                            <Icon
                              glyph="cross"
                              width="100%"
                              height="100%"
                            />
                          )}
                          iconPosition="right"
                          onClick={() => {
                            handleFilterChange('festivalYearOptions', false, option);
                          }}
                        >
                          {option.text}
                        </Button>
                      </ButtonGroup.Item>
                    ))}
                  </ButtonGroup>
                )}
              >
                <MultipleSelect>
                  {filters.festivalYearOptions.map((option) => (
                    <MultipleSelect.Option key={option.value}>
                      <Checkbox
                        checked={option.selected}
                        onChange={(selected) => {
                          handleFilterChange('festivalYearOptions', selected, option);
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
                  {filters.festivalProgramOptions.map((option) => (
                    <CheckboxGroup.Item key={option.value}>
                      <Checkbox
                        variant="pseudo-button"
                        checked={option.selected}
                        onChange={(selected) => {
                          handleFilterChange('festivalProgramOptions', selected, option);
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
                        border: 'full'
                      }}
                      onClick={clearFilters}
                    >
                      Очистить
                    </Button>
                  )}
                  {isMobile && (
                    <Button
                      type="button"
                      border="full"
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
                      onClick={handleSubmitFilters}
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
                      onClick={() => {
                        handleFilterChange(param as FilterParam , false, option);
                      }}
                    >
                      {option.text}
                    </Button>
                  </ButtonGroup.Item>
                )))}
              </ButtonGroup>
            </LibraryLayout.Slot>
          )}
          <LibraryLayout.Slot area="content">
            <PlayList processing={isLoading && pagination.currentPage === 1}>
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
            {isFiltersApplied && !isLoading && (
              <InfiniteScrollTrigger
                isLoading={isLoading}
                onLoadNeeded={handleLoadNeeded}
                hasMore={Boolean(pagination.next)}
              />
            )}
          </LibraryLayout.Slot>
          {isMobile && (
            <LibraryLayout.FilterToggler
              onClick={handleShowFilters}
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

  const hasFiltersApplied = Object.keys(SearchParam).some((p) => searchParams.has(SearchParam[p as keyof typeof SearchParam]));
  const limit = hasFiltersApplied ? PLAYS_PER_PAGE : RANDOM_PLAYS_COUNT;

  const playsQueryParams = {
    years: searchParams.getAll(SearchParam.Year),
    programIds: searchParams.getAll(SearchParam.Program),
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
