import Link from 'next/link';

import { MainLayout } from 'components/main-layout';
import { FeedList } from 'components/feed-list';
import { NewsCard } from 'components/news-card';
import { BlogCard } from 'components/ui/blog-card';
import { TeaserList } from 'components/teaser-list';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { Section } from 'components/section';
import { PartnerList } from 'components/partner-list';
import { AddressList } from 'components/address-list';
import { AddressCard } from 'components/address-card';
import { MainHeader } from 'components/main-header';
import { HomepageFeedSection } from 'components/homepage-feed-section';
import { HomepageVideoArchiveSection } from 'components/homepage-video-archive-section';
import { HomepageEventsSection } from 'components/homepage-events-section';
import { AppLayout } from 'components/app-layout';
import { PlayCard } from 'components/play-card';
import { PlayList } from 'components/play-list';
import { EventList } from 'components/event-list';
import { EventCard } from 'components/event-card';
import PartnerCard from 'components/partner-card';
import { SEO } from 'components/seo';
import { fetcher } from 'services/fetcher';
import { getPartners } from 'services/api/partners';
import { format } from 'shared/helpers/format-date';
import { PartnerType } from 'core/partner';

import type { InferGetServerSidePropsType } from 'next';
import type { Partner } from 'core/partner';
import type { Main as MainPageData } from '__generated__/api-typings';

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
      <AppLayout noNavbar={!!first_screen}>
        {first_screen && (
          <MainHeader
            cover={first_screen.image}
            title={first_screen.title}
            actionText={first_screen.url_title}
            actionUrl={first_screen.url}
          />
        )}
        <MainLayout>
          {!!afisha?.items.length && (
            <MainLayout.Events>
              <HomepageEventsSection
                title={afisha.afisha_today ? (
                  <>
                    Афиша на сегодня,
                    {' '}
                    {format('d MMMM', new Date())}
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
                        // @ts-ignore: TODO: разобраться, сча в схеме API нет поля с изображением
                        imageUrl={event.event_body.image}
                        date={format('d MMMM', new Date(event.date_time))}
                        time={format('H:mm', new Date(event.date_time))}
                        title={event.event_body.name}
                        team={event.event_body.team}
                        projectTitle={event.event_body.project_title}
                        description={event.event_body.description}
                        {...event.type === 'PERFORMANCE' ? {
                          performanceUrl: `/performances/${event.event_body.id}`,
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
                <FeedList>
                  {blog ? (
                    blog.items.map((entry) => (
                      <FeedList.Item key={entry.id}>
                        <BlogCard
                          id={entry.id}
                          image={entry.image}
                          author={entry.author_url_title}
                          heading={entry.title}
                          description={entry.description}
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
                          date={entry.pub_date && format('d MMMM yyyy', new Date(entry.pub_date))}
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
    partners = await getPartners();
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
