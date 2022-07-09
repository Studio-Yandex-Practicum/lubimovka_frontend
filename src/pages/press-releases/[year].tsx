import Image from 'next/image';
import { useRouter } from 'next/router';
import Error from 'next/error';
import classNames from 'classnames/bind';

import { AppLayout } from 'components/app-layout';
import { PressReleaseLayout } from 'components/press-release-layout';
import { PageTitle } from 'components/page-title';
import { Filter } from 'components/filter';
import { Select } from 'components/select';
import { SEO } from 'components/seo';
import { Button } from 'components/ui/button2';
import { HTMLMarkup } from 'components/html-markup';
import { Icon } from 'components/ui/icon';
import { ForPressHero } from 'components/for-press-hero';
import { fetcher } from 'services/fetcher';
import { usePersistentData } from 'providers/persistent-data-provider';

import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import type { SelectOption, SelectOptionCheckHandler } from 'components/select';
import type { PressRelease as PressReleaseResponse } from 'api-typings';
import type { Url } from 'shared/types';

import styles from 'components/press-release-layout/press-release-layout.module.css';

const cx = classNames.bind(styles);

type PressRelease = {
  cover: Url
  content: string
}

const PressReleases = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { settings } = usePersistentData();

  if ('errorCode' in props) {
    return (
      <Error statusCode={props.errorCode}/>
    );
  }

  let yearOptions: SelectOption<number>[] = [];
  let selectedYearOption: SelectOption<number> | undefined;

  const {
    pressReleaseYears,
    // @ts-ignore
    selectedPressReleaseYear, cover, content,
  } = props;

  if (pressReleaseYears) {
    yearOptions = pressReleaseYears.map((year) => ({
      text: year.toString(),
      value: year,
    }));
    selectedYearOption = yearOptions.find(({ value }) => value === selectedPressReleaseYear);
  }

  const handleYearChange: SelectOptionCheckHandler<number> = ({ value }) => {
    router.push(`/press-releases/${value}`, undefined, { scroll: false });
  };

  return (
    <AppLayout>
      <SEO
        title="Пресс-релизы"
      />
      <ForPressHero data={{
        forPressHeroTitle: {
          title: 'Для прессы',
        },
        forPressHeroDescription: {
          description: 'Фотографии можно скачать в альбомах на странице фестиваля в Facebook.',
          link: settings?.pressCenter.facebookGalleryUrl || '',
        },
        prPerson: {
          // TODO: отрефакторить и отобразить процесс получение данных нормально, например, добавить в общую раскладку спиннер
          name: '',
          nameDative: settings?.pressCenter.contactPerson || '',
          email: settings?.pressCenter.contactEmail || '',
          role: 'PR-директор фестиваля, координатор по связям со СМИ',
          photo: settings?.pressCenter.contactPersonPhoto || '',
        }
      }}
      />
      {pressReleaseYears && (
        <PressReleaseLayout>
          <PressReleaseLayout.Title>
            <PageTitle>
              Пресс-релизы
            </PageTitle>
          </PressReleaseLayout.Title>
          {cover && (
            <PressReleaseLayout.Cover>
              <Image
                alt=""
                src={cover}
                layout="fill"
                objectFit="cover"
              />
            </PressReleaseLayout.Cover>
          )}
          <Filter className={cx('filter')}>
            <Filter.Field
              className={cx('year')}
              caption="Выберите год фестиваля"
            >
              <Select<number>
                placeholder="Выберите год"
                options={yearOptions}
                selectedOption={selectedYearOption}
                onChange={handleYearChange}
              />
            </Filter.Field>
          </Filter>
          <PressReleaseLayout.Actions>
            <Button
              icon={(
                <Icon
                  glyph="arrow-down"
                  width="100%"
                  height="100%"
                />
              )}
              iconPosition="right"
              border="right-bottom-left"
              href={`/press-releases/${selectedPressReleaseYear}/download`}
            >
              Скачать пресс-релиз
              {' '}
              <span className={cx('additional-note')}>
                {`${selectedPressReleaseYear} года`}
                {' '}
              </span>
              в .pdf
            </Button>
          </PressReleaseLayout.Actions>
          {content && (
            <PressReleaseLayout.Content>
              <HTMLMarkup
                markup={content}
              />
            </PressReleaseLayout.Content>
          )}
        </PressReleaseLayout>
      )}
    </AppLayout>
  );
};

const fetchPressReleaseYears = async () => {
  // TODO: использовать тип из кодогенерации
  let response: Record<'years', number[]>;

  try {
    response = await fetcher('/info/press-releases/years/');
  } catch (error) {
    return;
  }

  return response.years;
};

const fetchPressRelease = async (year: number): Promise<PressRelease | undefined> => {
  try {
    const response = await fetcher<PressReleaseResponse>(`/info/press-releases/${year}/`);
    return {
      cover: response.image,
      content: response.text,
    };
  } catch (error) {
    return;
  }
};

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const serverErrorResult = {
    props: {
      errorCode: 500,
    },
  } as const;
  const pressReleaseYears = await fetchPressReleaseYears();

  if (!pressReleaseYears) {
    return serverErrorResult;
  }

  if (pressReleaseYears.length > 0) {
    pressReleaseYears.sort((a, b) => a - b);

    const selectedPressReleaseYear = params?.year ? Number(params.year) : pressReleaseYears[pressReleaseYears.length - 1];
    const pressRelease = await fetchPressRelease(selectedPressReleaseYear);

    return {
      props: {
        pressReleaseYears,
        selectedPressReleaseYear,
        ...pressRelease
      }
    };
  }

  return {
    props: {
      pressReleaseYears: null,
    }
  };
};

export default PressReleases;
