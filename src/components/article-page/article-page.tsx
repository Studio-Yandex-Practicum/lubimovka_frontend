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
import { BlogData, ComplexItem, NewsData, Person, Play } from './types/article-types';

import styles from './article-page.module.css';

const cx = cn.bind(styles);

interface IArticlePageProps {
  data: BlogData | NewsData
}

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

  const authors: string[] = [];
  const illustrators: string[] = [];
  const photographers: string[] = [];

  if ('persons' in data) {
    data.persons.forEach(el => {
      switch (el.role) {
      case 'TEXT':
        authors.push(el.full_name);
        break;
      case 'ILLUSTRATION':
        illustrators.push(el.full_name);
        break;
      case 'PHOTO':
        photographers.push(el.full_name);
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
          isBlog={'blogs' in data}
          title={data.title}
          description={data.description}
          date={data.created}
          imgLink={data.image}
          author={'author_url_title' in data ? data.author_url_title : undefined}
          authorLink={'author_url' in data ? data.author_url : undefined}
        />
        <ArticleMainText>
          {data.preamble &&
          <h6>{data.preamble}</h6>}
          {data.contents.map((item, idx) => {
            switch (item.content_type) {
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
            {/*В ответе от бэка:
             для пьес не хватает авторов, непонятно что за свойства is_draft, program, festival;
             для персон не хватает должности.
          */}
            <BasicPlayCardList>
              {sectionPlays.items &&
              sectionPlays.items.map((item) => (
                <BasicPlayCard
                  key={item.id}
                  play={{
                    title: item.name,
                    city: item.city,
                    // TODO: поменять тип year в basic-play-card
                    year: '2020', //item.year,
                    linkView: item.url_reading,
                    linkDownload: item.url_download,
                  }}
                  author={{
                    // TODO: добавить реальные данные в ответ бекенда
                    id: 0,
                    name: 'Константин Константинопольский',
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
                  // TODO: добавить реальные данные в ответ бекенда
                  about='Драматург, сценарист, преподаватель'
                />
              )}
            </PersonCardList>
          </Section>}
        <ArticleShare
          isBlog={'blogs' in data}
          authors={authors}
          illustrators={illustrators}
          photographers={photographers}
        />
      </main>
      <ArticleOther
        isBlog={'blogs' in data}
        blogArticle={'blogs' in data ? data.blogs : undefined}
        newsArticle={'news' in data ? data.news : undefined}
      />
    </>
  );
};
