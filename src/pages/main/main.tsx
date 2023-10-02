import { format } from 'date-fns';
import Link from 'next/link';

import { AddressCard } from 'components/address-card';
import { AddressList } from 'components/address-list';
import { AppLayout } from 'components/app-layout';
import { BlogEntryCard } from 'components/blog-entry-card';
import { EventCard } from 'components/event-card';
import { EventList } from 'components/event-list';
import { FeedList } from 'components/feed-list';
import { HomepageEventsSection } from 'components/homepage-events-section';
import { HomepageFeedSection } from 'components/homepage-feed-section';
import { HomepageVideoArchiveSection } from 'components/homepage-video-archive-section';
import { MainHeader } from 'components/main-header';
import { MainLayout } from 'components/main-layout';
import { NewsCard } from 'components/news-card';
import PartnerCard from 'components/partner-card';
import { PartnerList } from 'components/partner-list';
import { PlayCard } from 'components/play-card';
import { PlayList } from 'components/play-list';
import { Section } from 'components/section';
import { SEO } from 'components/seo';
import { TeaserList } from 'components/teaser-list';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { PartnerType } from 'core/partner';
import { fetchPartners } from 'services/api/partners-adapter';
import { fetcher } from 'services/fetcher';

import type { Main as MainPageData } from '__generated__/api-typings';
import type { Partner } from 'core/partner';
import type { InferGetServerSidePropsType } from 'next';

const Main = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

  const getPartnersGroups = () => Object.keys(partners) as (keyof typeof PartnerType)[];

  return (
    <>
      <SEO title="Главная"/>
      <AppLayout
        hiddenPartners
        {...first_screen && {
          customNavbar: (
            <MainHeader
              cover={first_screen.image}
              title={first_screen.title}
              actionText={first_screen.url_title}
              actionUrl={first_screen.url}
            />
          )
        }}
      >
        <MainLayout>
          {!!afisha?.items.length && (
            <MainLayout.Events>
              <HomepageEventsSection
                title={afisha.afisha_today ? (
                  <>
                    Афиша на сегодня,
                    {' '}
                    {format(new Date(), 'd MMMM')}
                  </>
                ) : (
                  <>
                    Афиша
                    <br/>
                    событий
                  </>
                )}
                description={afisha!.description}
              >
                <EventList>
                  {afisha.items.map((event) => (
                    <EventList.Item key={event.id}>
                      <EventCard
                        imageUrl={event.image}
                        date={format(new Date(event.date_time), 'd MMMM')}
                        time={format(new Date(event.date_time), 'H:mm')}
                        title={event.title}
                        type={event.type}
                        team={event.team}
                        description={event.description}
                        {...event.performance_id ? {
                          aboutText: 'О спектакле',
                          aboutUrl: `/performances/${event.performance_id}`,
                        } : {}}
                        actionUrl={event.action_url}
                        actionText={event.action_text}
                      />
                    </EventList.Item>
                  ))}
                </EventList>
              </HomepageEventsSection>
            </MainLayout.Events>
          )}
          {(blog || news) && (
            <MainLayout.Feed>
              <HomepageFeedSection
                title={blog ? 'Дневник фестиваля' : 'Новости'}
                action={(
                  <Link
                    href={blog ? '/blog' : '/news'}
                    passHref
                  >
                    <Button
                      size="s"
                      border="bottom-left"
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
                  </Link>
                )}
              >
                <FeedList
                  variant={blog ? 'blog' : 'news'}
                >
                  {blog ? (
                    blog.items.map((entry) => (
                      <FeedList.Item key={entry.id}>
                        <BlogEntryCard
                          image={entry.image}
                          authorFullName={entry.author_url_title}
                          authorUrl={entry.author_url}
                          title={entry.title}
                          description={entry.description}
                          viewUrl={`/blog/${entry.id}`}
                        />
                      </FeedList.Item>
                    ))
                  ) : (
                    // @ts-ignore: TODO: Сходу не понял, почему добавлен игнор, нужно исправить
                    news.items.map((entry) => (
                      <FeedList.Item key={entry.id}>
                        <NewsCard
                          view="compact"
                          title={entry.title}
                          description={entry.description}
                          date={entry.pub_date && format(new Date(entry.pub_date), 'd MMMM yyyy')}
                          href={`/news/${entry.id}`}
                        />
                      </FeedList.Item>
                    ))
                  )}
                </FeedList>
              </HomepageFeedSection>
            </MainLayout.Feed>
          )}
          <MainLayout.Content>
            {!!banners?.items.length && (
              <Section type="homepage-teasers">
                <TeaserList
                  items={banners.items}
                />
              </Section>
            )}
            {!!short_list?.items.length && (
              <Section
                title={short_list.title}
                type="homepage-shortlist"
              >
                <PlayList variant="scrollable">
                  {short_list.items.map((item) => (
                    <PlayList.Item key={item.id}>
                      <PlayCard
                        title={item.name}
                        city={item.city}
                        year={item.year?.toString()}
                        readingUrl={item.url_reading}
                        downloadUrl={item.url_download}
                        authors={item.authors.map((author) => ({
                          slug: author.slug,
                          fullName: author.name,
                        }))}
                      />
                    </PlayList.Item>
                  ))}
                </PlayList>
              </Section>
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
                    <PartnerList.Item key={partner.name}>
                      <PartnerCard
                        variant="regular"
                        logo={partner.logo}
                        name={partner.name}
                        description={partner.description}
                        url={partner.url}
                      />
                    </PartnerList.Item>
                  ))}
                </PartnerList>
              </Section>
            ))}
          </MainLayout.Content>
        </MainLayout>
      </AppLayout>
    </>
  );
};

export const getServerSideProps = async () => {
  let partners: Partner[] = [];
  const pageData = await fetcher<MainPageData>('/main/');

  try {
    partners = await fetchPartners();
  } catch {
    // ничего не делаем
  }

  return {
    props: {
      ...pageData,
      partners: groupPartnersByType(partners),
    },
  };
};

export default Main;

function groupPartnersByType(partners: Partner[]) {
  return partners.reduce<Record<keyof typeof PartnerType, Partner[]>>((groups, partner) => {
    groups[partner.type] = groups[partner.type] ? [
      ...groups[partner.type],
      partner,
    ] : [partner];

    return groups;
  }, {} as Record<keyof typeof PartnerType, Partner[]>);
}

function getPartnerGroupTitle(partnerType: keyof typeof PartnerType) {
  return PartnerType[partnerType];
}
