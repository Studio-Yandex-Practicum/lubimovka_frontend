import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { encode } from 'querystring';

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
import { getFestivalYears, getPressRelease } from 'services/api/press-releases';
import { isNonEmpty } from 'shared/helpers/is-non-empty';
import { usePersistentData } from 'providers/persistent-data-provider';

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import type { SelectOptionCheckHandler } from 'components/ui/select';

import styles from 'components/press-release-layout/press-release-layout.module.css';

const cx = classNames.bind(styles);

enum SearchParam {
  Year = 'year',
}

const PressRelease = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { settings } = usePersistentData();

  const {
    festivalYearOptions,
    selectedFestivalYear,
    pressRelease,
  } = props;

  let selectedFestivalYearOption;

  if (isNonEmpty(festivalYearOptions)) {
    selectedFestivalYearOption = festivalYearOptions.find(({ value }) => value === selectedFestivalYear);
  }

  const handleYearChange: SelectOptionCheckHandler<string> = ({ value }) => {
    router.push(`/press-releases/${value}`, undefined, { scroll: false });
  };

  return (
    <>
      <SEO title="Пресс-релизы"/>
      <AppLayout>
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
        {isNonEmpty(festivalYearOptions) && isNonEmpty(pressRelease) && (
          <PressReleaseLayout>
            <PressReleaseLayout.Slot area="title">
              <PageTitle>
                Пресс-релизы
              </PageTitle>
            </PressReleaseLayout.Slot>
            {pressRelease.imageUrl && (
              <PressReleaseLayout.Slot area="image">
                <Image
                  alt=""
                  src={pressRelease.imageUrl}
                  layout="fill"
                  objectFit="cover"
                />
              </PressReleaseLayout.Slot>
            )}
            <Filter className={cx('filter')}>
              <Filter.Field
                className={cx('year')}
                caption="Выберите год фестиваля"
              >
                <Select<string>
                  placeholder="Выберите год"
                  options={festivalYearOptions}
                  selectedOption={selectedFestivalYearOption}
                  onChange={handleYearChange}
                />
              </Filter.Field>
            </Filter>
            <PressReleaseLayout.Slot area="actions">
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
                href={`/press-releases/${selectedFestivalYear}/download`}
              >
                Скачать пресс-релиз
                {' '}
                <span className={cx('additional-note')}>
                  {`${selectedFestivalYear} года`}
                  {' '}
                </span>
                в .pdf
              </Button>
            </PressReleaseLayout.Slot>
            {pressRelease.text && (
              <PressReleaseLayout.Slot area="content">
                <HTMLMarkup
                  markup={pressRelease.text}
                />
              </PressReleaseLayout.Slot>
            )}
          </PressReleaseLayout>
        )}
      </AppLayout>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const festivalYears = await getFestivalYears();

  if (!isNonEmpty(festivalYears)) {
    return {
      props: {
        festivalYearOptions: null,
      },
    };
  }

  festivalYears.sort();

  const searchParams = new URLSearchParams(encode(ctx.params));
  const selectedFestivalYear = searchParams.get(SearchParam.Year) || festivalYears[festivalYears.length - 1];

  const festivalYearOptions = festivalYears.map((year) => ({
    text: year,
    value: year,
  }));

  const pressRelease = await getPressRelease(selectedFestivalYear);

  return {
    props: {
      festivalYearOptions,
      selectedFestivalYear,
      pressRelease: pressRelease,
    }
  };
};

export default PressRelease;
