import { FC } from 'react';
import Head from 'next/head';
import cn from 'classnames/bind';

import { Section } from 'components/section';
import { BasicPlayCard } from 'components/ui/basic-play-card';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { PersonCard, PersonCardList } from 'components/ui/person-card';
import { ImageSlider } from 'components/ui/image-slider';
import ArticleTitle from './article-title/article-title';
import ArticleShare from './article-share/article-share';
import { ArticleMainText } from './article-maintext';
import ArticleOther from './article-other/article-other';


import styles from './article-page.module.css';
import { BlogData, ComplexItem, Person, Play } from './types/article-types';

const cx = cn.bind(styles);

interface IArticlePageProps {
  metaTitle: string;
  isBlog: boolean;
  data: BlogData; // | NewsData
}

export const ArticlePage: FC<IArticlePageProps> = (props: IArticlePageProps) => {
  const {
    metaTitle,
    isBlog,
    data,
  } = props;

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

  if (isBlog) {
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
        <title>{metaTitle}</title>
      </Head>
      <main>
        <ArticleTitle
          isBlog={isBlog}
          title={data.title}
          description={data.description}
          date={data.created}
          imgLink={data.image}
          author={data.author_url_title}
          authorLink={data.author_url}
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
                <ImageSlider
                  images={item.content_item.items}
                  className={cx('imagesblock')}
                  key={idx}
                />
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
                  link={item.image}
                  name={`${item.first_name} ${item.last_name}`}
                  // TODO: добавить реальные данные в ответ бекенда
                  about='Драматург, сценарист, преподаватель'
                />
              )}
            </PersonCardList>
          </Section>}
        <ArticleShare
          isBlog={isBlog}
          authors={authors}
          illustrators={illustrators}
          photographers={photographers}
        />
      </main>
      <ArticleOther isBlog={isBlog} blogArticles={data.blogs}/>
    </>
  );
};
