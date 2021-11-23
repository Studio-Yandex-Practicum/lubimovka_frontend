import { FC } from 'react';
import Head from 'next/head';
import cn from 'classnames/bind';

import { Section } from 'components/section';
import { BasicPlayCard, IBasicPlayCardProps } from 'components/ui/basic-play-card';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { PersonCard, PersonCardList } from 'components/ui/person-card';
import { ImageSlider } from 'components/ui/image-slider';
import ArticleTitle from './article-title/article-title';
import ArticleShare from './article-share/article-share';
import { ArticleMainText } from './article-maintext';
import ArticleOther from './article-other/article-other';


import styles from './article-page.module.css';
import DataPlays from './assets/mock-data-plays.json';
import { BlogData, Content, ComplexItem, Play, Person, TextItem, Image } from './types/article-types';

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

  const sectionPlays = data.contents
    .find(item => item.content_type === 'playsblock') as Content<ComplexItem<Play>>;
  const sectionPersons = data.contents
    .find(item => item.content_type === 'personsblock') as Content<ComplexItem<Person>>;

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
              return (<h4 key={idx}>{(item.content_item as TextItem).title}</h4>);
            case 'quote':
              return (<blockquote key={idx}>{(item.content_item as TextItem).quote}</blockquote>);
            case 'text':
              return (<p key={idx}>{(item.content_item as TextItem).text}</p>);
            case 'imagesblock':
              return (
                <ImageSlider
                  images={(item.content_item as ComplexItem<Image>).items}
                  className={cx('imagesblock')}
                  key={idx}
                />
              );
            }
          })}
        </ArticleMainText>

        <Section type={'plays'} title={sectionPlays.content_item.title || ''} className={cx('sectionPlaysList')}>
          {/*В ответе от бэка:
             для пьес не хватает авторов, непонятно что за свойства is_draft, program, festival;
             для персон не хватает должности.
          */}
          <BasicPlayCardList>
            {(DataPlays as IBasicPlayCardProps[]).map((item, idx) => (
              <BasicPlayCard key={idx} {...item}/>
            ))}
          </BasicPlayCardList>
        </Section>

        {sectionPersons &&
          <Section type={'persons'} title={sectionPersons.content_item.title || ''} className={cx('sectionPersonsList')}>
            <PersonCardList>
              {sectionPersons.content_item.items &&
            sectionPersons.content_item.items.map(item =>
              <PersonCard
                key={item.id}
                participant={true}
                link={item.image}
                name={`${item.first_name} ${item.last_name}`}
                about="Не хватает должности"
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
      <ArticleOther isBlog={isBlog}/>
    </>
  );
};
