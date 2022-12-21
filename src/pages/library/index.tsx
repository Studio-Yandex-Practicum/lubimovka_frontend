import { useCallback, useState, useRef, useMemo } from 'react';
import { useRouter } from 'next/router';
import { debounce } from '@funboxteam/diamonds';
import { encode } from 'querystring';
import isEqual from 'lodash/isEqual';
import Error from 'next/error';

import { AppLayout } from 'components/app-layout';
import { LibraryLayout } from 'components/library-layout';
import { SEO } from 'components/seo';
import { Filter } from 'components/filter';
import { MultipleSelect } from 'components/ui/multiple-select';
import { Checkbox } from 'components/ui/checkbox';
import { PlayCard } from 'components/play-card';
import { PlayList } from 'components/play-list';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { ButtonGroup } from 'components/ui/button-group';
import { CheckboxGroup } from 'components/ui/checkbox-group';
import { PlayFilterDialog } from 'components/play-filter-dialog';
import { objectMap } from 'shared/helpers/object-map';
import { useEffectAfterMount } from 'shared/hooks/use-effect-after-mount';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import breakpoints from 'shared/breakpoints';

import { getPlays, getPlayFilters } from 'services/api/plays';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

type PlaysViewProps = InferGetServerSidePropsType<typeof getServerSideProps>
type FilterState = PlaysViewProps['defaultFilterState'];
type FilterParam = keyof FilterState;

const Plays = (props: PlaysViewProps) => {
  const router = useRouter();

  const [filterState, setFilterState] = useState(props.defaultFilterState);
  const savedFilterState = useRef<FilterState>(props.defaultFilterState);
  const [plays, setPlays] = useState(props.plays);
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const FilterContainer = isMobile ? PlayFilterDialog : LibraryLayout.Slot;

  const [isLoading, setIsLoading] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const isFiltersApplied = Object.values(filterState).some((options) => options.some((o) => o.selected));

  const handleOptionChange = useCallback((param: FilterParam, selected: boolean, option) => {
    setFilterState(objectMap(filterState,
      (key, options) => key === param
        ? options.map((o) => ({ ...o, selected: o.value === option.value ? selected : o.selected }))
        : options
    ));
  }, [filterState]);

  const fetchPlaysDebounced = useCallback(debounce(
    async (searchParams) => {
      let result;

      try {
        result = await getPlays(searchParams);
      } catch {
        setErrorOccurred(true);
        return;
      }

      setPlays(result);
      setIsLoading(false); // TODO: проверять handle запроса, перед обновлением стейта
    }, 500), []);

  const selectedFilterOptions = useMemo(
    () => objectMap(filterState, (param, options) => options.filter((o) => o.selected)
    ), [filterState]);

  const resetFilters = () => {
    setFilterState(objectMap(filterState, (key, options) => options.map((o) => ({ ...o, selected: false }))));
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
    if (isMobile && (isFilterDialogOpen || isEqual(savedFilterState.current, filterState))) {
      return;
    }

    const searchParamsToFilterStateMap = {
      year: filterState.festivalYearOptions,
      program: filterState.festivalProgramOptions,
    };
    const searchParams = objectMap(searchParamsToFilterStateMap, (param, options) => options.filter((o) => o.selected).map((o) => o.value));

    router.replace({ query: { ...router.query, ...searchParams } }, undefined, { shallow: true });

    setIsLoading(true);
    fetchPlaysDebounced({ years: searchParams.year, programIds: searchParams.program });
  }, [filterState, isFilterDialogOpen]);

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
                        onChange={(selected) => { handleOptionChange('festivalYearOptions', selected, option); }}
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
                        onChange={(selected) => { handleOptionChange('festivalProgramOptions', selected, option); }}
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
                      onClick={() => handleOptionChange(param as FilterParam , false, option)}
                    >
                      {option.text}
                    </Button>
                  </ButtonGroup.Item>
                )))}
              </ButtonGroup>
            </LibraryLayout.Slot>
          )}
          <LibraryLayout.Slot area="content">
            {isLoading ? (
              <LibraryLayout.Spinner/>
            ) : (
              <PlayList>
                {plays.map((play) => (
                  <PlayList.Item key={play.id}>
                    <PlayCard
                      play={{
                        title: play.title,
                        city: play.city,
                        year: play.year ? Number(play.year) : undefined,
                        readingUrl: play.readingUrl,
                        downloadUrl: play.readingUrl,
                        authors: play.authors.map((author) => ({
                          name: author.fullName,
                          slug: author.slug,
                        })),
                      }}
                    />
                  </PlayList.Item>
                ))}
              </PlayList>
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

  const filters = await getPlayFilters();
  const plays = await getPlays();

  const defaultFestivalYearOptions = filters.years.map((year) => ({
    text: year.toString(),
    value: year,
    selected: searchParams.getAll('year').includes(year),
  }));

  const defaultFestivalProgramOptions = filters.programs.map((program) => ({
    text: program.title,
    value: program.id,
    selected: searchParams.getAll('program').includes(program.id),
  }));

  return {
    props: {
      defaultFilterState: {
        festivalYearOptions: defaultFestivalYearOptions,
        festivalProgramOptions: defaultFestivalProgramOptions,
      },
      plays,
    }
  };
};
