import { encode } from 'querystring';

import classNames from 'classnames/bind';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { AppLayout } from 'components/app-layout';
import { Filter } from 'components/filter';
import { ForPressHero } from 'components/for-press-hero';
import { HTMLMarkup } from 'components/html-markup';
import { PageTitle } from 'components/page-title';
import { PressReleaseLayout } from 'components/press-release-layout';
import styles from 'components/press-release-layout/press-release-layout.module.css';
import { SEO } from 'components/seo';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { Select } from 'components/ui/select';
import { getFestivalYears, getPressRelease } from 'services/api/press-releases';
import { useSettings } from 'services/api/settings-adapter';
import { isNonEmpty } from 'shared/helpers/is-non-empty';

import type { SelectOptionCheckHandler } from 'components/ui/select';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

const cx = classNames.bind(styles);

enum SearchParam {
  Year = 'year',
}

const PressRelease = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { settings } = useSettings();

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
