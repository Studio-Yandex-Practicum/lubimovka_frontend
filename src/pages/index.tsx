/* eslint-disable @typescript-eslint/no-unused-vars */

import Error from 'next/error';
import classNames from 'classnames/bind';

import { HomepageLayout } from 'components/homepage-layout';
import { MainTitle } from 'components/main-page/title';
import { MainEvents } from 'components/main-page/events';
import { NewsList } from 'components/news-list';
import { NewsCard } from 'components/news-card';
import { TeaserList } from 'components/teaser-list';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { Section } from 'components/section';
import { PartnerList } from 'components/partner-list';
import { AddressList } from 'components/address-list';
import { AddressCard } from 'components/address-card';
import { HomepageFeedSection } from 'components/homepage-feed-section';
import { MainShortList } from 'components/main-page/shortList';
import { HomepageVideoArchiveSection } from 'components/homepage-video-archive-section';
import { HomepageHeadline } from 'components/homepage-headline';
import { AppLayout } from 'components/app-layout';
import { Banner } from 'components/banner';
import { SEO } from 'components/seo';
import { fetcher } from 'shared/fetcher';
import { format } from 'shared/helpers/format-date';
import { partnerTypes } from 'shared/constants/partner-types';

import type { InferGetServerSidePropsType } from 'next';
import type { Main, Partner, partner_type } from 'api-typings';

import styles from 'components/homepage-layout/homepage-layout.module.css';

const cx = classNames.bind(styles);

const Homepage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if ('errorCode' in props) {
    return (
      <Error statusCode={props.errorCode}/>
    );
  }

  const {
    first_screen,
    afisha,
    blog,
    news,
    banners,
    places,
    video_archive,
    short_list,
    partners,
  } = props;

  const getPartnersGroups = () => Object.keys(partners) as partner_type[];

  return (
    <AppLayout
      hiddenPartners
      navbarProps={{
        view: first_screen ? 'expanded': 'normal',
      }}
      headBanner={first_screen ? (
        <Banner image={first_screen.image}/>
      ) : undefined}
    >
      <SEO title="Главная"/>
      <HomepageLayout>
        {first_screen && (
          <HomepageHeadline
            className={cx('headline')}
            title={first_screen.title}
            url={first_screen.url}
            callToAction={first_screen.url_title}
          />
        )}
        {afisha && afisha.items?.length > 0 && (
          <HomepageLayout.Events>
            {/* <MainTitle
              afisha_today={afisha.afisha_today}
              description={afisha.description}
            />
            <MainEvents
              {...afisha}
            /> */}
          </HomepageLayout.Events>
        )}
        {!!news?.items.length && (
          <HomepageLayout.Feed>
            <HomepageFeedSection
              title="Новости"
              action={(
                <Button
                  size="s"
                  border="bottom-left"
                  href="/news"
                  upperCase
                  icon={(
                    <Icon
                      glyph="arrow-right"
                      width="100%"
                      height="100%"
                    />
                  )}
                >
                  Все записи
                </Button>
              )}
            >
              <NewsList className={cx('list')}>
                {news.items.map((entry) => (
                  <NewsList.Item key={entry.id}>
                    <NewsCard
                      view="compact"
                      title={entry.title}
                      description={entry.description}
                      date={entry.pub_date && format('d MMMM yyyy', new Date(entry.pub_date))}
                      href={`/news/${entry.id}`}
                    />
                  </NewsList.Item>
                ))}
              </NewsList>
            </HomepageFeedSection>
          </HomepageLayout.Feed>
        )}
        <HomepageLayout.Content>
          {!!banners?.items.length && (
            <TeaserList
              items={banners.items}
            />
          )}
          {!!short_list?.items.length && (
            <MainShortList
              {...short_list}
            />
          )}
          {!!places?.items.length && (
            <Section
              type="places"
              title="Площадки"
            >
              <AddressList>
                {places.items.map((place) => (
                  <AddressList.Item key={place.id}>
                    <AddressCard
                      title={place.name}
                      description={place.description}
                      address={place.address}
                      url={place.map_link}
                    />
                  </AddressList.Item>
                ))}
              </AddressList>
            </Section>
          )}
          {video_archive && (
            <HomepageVideoArchiveSection
              url={video_archive.url}
              image={video_archive.photo}
            />
          )}
          {getPartnersGroups().map((group) => (
            <Section
              key={group}
              type="partners"
              title={getPartnerGroupTitle(group)}
            >
              <PartnerList>
                {partners[group].map((partner) => (
                  <PartnerList.Item
                    key={partner.name}
                    logo={partner.image}
                    name={partner.name}
                  />
                ))}
              </PartnerList>
            </Section>
          ))}
        </HomepageLayout.Content>
      </HomepageLayout>
    </AppLayout>
  );
};

const fetchHomepageData = async () => {
  try {
    return await fetcher<Main>('/main/');
  } catch {
    return;
  }
};

const fetchPartners = async () => {
  try {
    const response = await fetcher<Partner[]>('/info/partners/');

    return response;
  } catch {
    return [];
  }
};

export const getServerSideProps  = async () => {
  const data = await fetchHomepageData();
  const partners = await fetchPartners();
  const errorResult = {
    props: {
      errorCode: 500,
    }
  } as const;

  if (!data) {
    return errorResult;
  }

  function groupPartnersByType(partners: Partner[]) {
    return partners.reduce<Record<partner_type, Partner[]>>((groups, partner) => {
      groups[partner.type] = groups[partner.type] ? [
        ...groups[partner.type],
        partner,
      ] : [partner];

      return groups;
    }, {} as Record<partner_type, Partner[]>);
  }

  return {
    props: {
      ...data,
      // TODO: договориться с бекендерами передавать массив значений для фильтра партнеров и избавиться от костыля с фильтрацией
      partners: groupPartnersByType(partners.filter(({ type }) => type !== 'general')),
    },
  };
};

export default Homepage;

function getPartnerGroupTitle(partnerType: keyof typeof partnerTypes) {
  return partnerTypes[partnerType];
}
