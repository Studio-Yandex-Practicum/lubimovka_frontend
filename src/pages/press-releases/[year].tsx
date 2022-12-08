import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import { AppLayout } from 'components/app-layout';
import { PressReleaseLayout } from 'components/press-release-layout';
import { PageTitle } from 'components/page-title';
import { Filter } from 'components/filter';
import { Select } from 'components/ui/select';
import { SEO } from 'components/seo';
import { Button } from 'components/ui/button2';
import { HTMLMarkup } from 'components/html-markup';
import { Icon } from 'components/ui/icon';
import { ForPressHero } from 'components/for-press-hero';
import { fetcher } from 'services/fetcher';
import { usePersistentData } from 'providers/persistent-data-provider';
import { InternalServerError } from 'shared/helpers/internal-server-error';

import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import type { SelectOption, SelectOptionCheckHandler } from 'components/ui/select';
import type { PressRelease as PressReleaseResponse } from '__generated__/api-typings';

import styles from 'components/press-release-layout/press-release-layout.module.css';

const cx = classNames.bind(styles);

const PressReleases = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { settings } = usePersistentData();

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
  const { years } = await fetcher<Record<'years', number[]>>('/info/press-releases/years/');

  return years;
};

const fetchPressRelease = async (year: number) => {
  const response = await fetcher<PressReleaseResponse>(`/info/press-releases/${year}/`);

  return {
    cover: response.press_release_image,
    content: response.text,
  };
};

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  let pressReleaseYears;

  try {
    pressReleaseYears = await fetchPressReleaseYears();
  } catch {
    throw new InternalServerError();
  }

  if (pressReleaseYears.length === 0) {
    return {
      props: {
        pressReleaseYears: null,
      }
    };
  }

  pressReleaseYears.sort((a, b) => a - b);

  const selectedPressReleaseYear = params?.year ? Number(params.year) : pressReleaseYears[pressReleaseYears.length - 1];
  let pressRelease;

  try {
    pressRelease = await fetchPressRelease(selectedPressReleaseYear);
  } catch {
    throw new InternalServerError();
  }

  return {
    props: {
      pressReleaseYears,
      selectedPressReleaseYear,
      ...pressRelease
    }
  };
};

export default PressReleases;
