import { FC } from 'react';
import Head from 'next/head';
import cn from 'classnames/bind';
import Image from 'next/image';

import { Section } from 'components/section';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { PersonCard } from 'components/ui/person-card';
import { PersonCardList } from 'components/person-card-list';
import { ImageSlider } from 'components/ui/image-slider';
import ArticleTitle from './article-title';
import ArticleShare from './article-share';
import { ArticleMainText } from './article-maintext';
import { ArticleOther } from './article-other';
import { BlogData, ComplexItem, NewsData, Person, PersonRole, Play } from '../../shared/types';

import styles from './article-page.module.css';

const cx = cn.bind(styles);

interface IArticlePageProps {
  data: BlogData | NewsData
}

const convertRolesToString = (roles: PersonRole[]) => roles.map(role => role.name).join(', ');

export const ArticlePage: FC<IArticlePageProps> = (props: IArticlePageProps) => {
  const { data } = props;

  let sectionPlays: ComplexItem<Play> | undefined;
  let sectionPersons: ComplexItem<Person> | undefined;

  data.contents.forEach((el) => {
    if(el.content_type === 'playsblock'){
      sectionPlays = el.content_item;
    }
    if(el.content_type === 'personsblock'){
      sectionPersons = el.content_item;
    }
  });

  let authors: string[] = [];
  let illustrators: string[] = [];
  let photographers: string[] = [];

  if ('team' in data) {
    data.team.forEach(teamItem => {
      switch (teamItem.slug) {
      case 'illustrations':
        illustrators = teamItem.persons;
        break;
      case 'text':
        authors = teamItem.persons;
        break;
      case 'photo':
        photographers = teamItem.persons;
        break;
      }
    });
  }

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <main>
        <ArticleTitle
          isBlog={'other_blogs' in data}
          title={data.title}
          description={data.description}
          date={data.pub_date}
          imgLink={data.image}
          author={'author_url_title' in data ? data.author_url_title : undefined}
          authorLink={'author_url' in data ? data.author_url : undefined}
        />
        <ArticleMainText>
          {data.contents.map((item, idx) => {
            switch (item.content_type) {
            case 'preamble':
              return (<h6 key={idx}>{item.content_item.preamble}</h6>);
            case 'title':
              return (<h4 key={idx}>{item.content_item.title}</h4>);
            case 'quote':
              return (<blockquote key={idx}>{item.content_item.quote}</blockquote>);
            case 'text':
              return (<p key={idx}>{item.content_item.text}</p>);
            case 'imagesblock':
              return (
                <ImageSlider className={cx('imagesblock')} key={idx}>
                  {item.content_item.items.map((image, index) => (
                    <Image
                      key={index}
                      src={image.image}
                      alt={image.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  ))}
                </ImageSlider>
              );
            }
          })}
        </ArticleMainText>

        {sectionPlays &&
          <Section type={'plays'} title={sectionPlays.title || ''} className={cx('sectionPlaysList')}>
            <BasicPlayCardList>
              {sectionPlays.items &&
              sectionPlays.items.map((item) => (
                <BasicPlayCard
                  key={item.id}
                  play={{
                    title: item.name,
                    city: item.city,
                    year: item.year,
                    linkView: item.url_reading,
                    linkDownload: item.url_download,
                    authors: item.authors,
                  }}
                />
              ))}
            </BasicPlayCardList>
          </Section>
        }

        {sectionPersons &&
          <Section type={'persons'} title={sectionPersons.title || ''} className={cx('sectionPersonsList')}>
            <PersonCardList>
              {sectionPersons.items && sectionPersons.items.map(item =>
                <PersonCard
                  key={item.id}
                  participant={true}
                  image={item.image}
                  name={`${item.first_name} ${item.last_name}`}
                  about={convertRolesToString(item.roles)}
                />
              )}
            </PersonCardList>
          </Section>}
        <ArticleShare
          isBlog={'other_blogs' in data}
          authors={authors}
          illustrators={illustrators}
          photographers={photographers}
        />
      </main>
      <ArticleOther
        blogArticle={'other_blogs' in data ? data.other_blogs : undefined}
        newsArticle={'other_news' in data ? data.other_news : undefined}
      />
    </>
  );
};
