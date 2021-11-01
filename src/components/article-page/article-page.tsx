import { FC } from 'react';
import Head from 'next/head';
import ArticleTitle from './article-title/article-title';
import {Section} from '../section';

import DataTitle from './assets/mock-data-title.json';
import DataPlays from './assets/mock-data-plays.json';
import DataPersons from './assets/mock-data-persons.json';
import ArticleText from './article-maintext/assets/mock-data-articleText';
import DataShare from './assets/mock-data-share.json';

import {BasicPlayCard, BasicPlayCardList, IBasicPlayCardProps} from '../ui/basic-play-card';
import {IPersonCardProps, PersonCard, PersonCardList} from '../ui/person-card';
import {padding} from 'polished';
import {ArticleMainText} from './article-maintext';
import ArticleShare from './article-share/article-share';

interface IArticlePageProps {
  metaTitle: string;
  isBlog: boolean;
}
export const ArticlePage: FC<IArticlePageProps> = (props: IArticlePageProps) => {
  const {
    metaTitle,
    isBlog,
  } = props;
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <ArticleTitle
        isBlog={isBlog}
        title={DataTitle.title}
        description={DataTitle.description}
        date={DataTitle.date}
        imgLink={DataTitle.imgLink}
        author={DataTitle.author}
        authorLink={DataTitle.authorLink}
      />
      <ArticleMainText>
        {ArticleText()}
      </ArticleMainText>
      <Section type={'plays'} title={'Заголовок блока с пьессами'} style={padding(120, 0, 54)}>
        <BasicPlayCardList>
          {(DataPlays as IBasicPlayCardProps[]).map((item, idx) => (
            <BasicPlayCard key={idx} {...item}/>
          ))}
        </BasicPlayCardList>
      </Section>
      <Section type={'persons'} title={'Заголовок блока с персонами'} style={padding(120, 0, 54)}>
        <PersonCardList>
          {(DataPersons as IPersonCardProps[]).map((item, idx) => (
            <PersonCard key={idx} {...item}/>
          ))}
        </PersonCardList>
      </Section>
      <ArticleShare
        isBlog={isBlog}
        authors={isBlog ? DataShare.authors : []}
        illustrators={isBlog ? DataShare.illustrators : []}
        photographers={isBlog ? DataShare.photographers : []}
      />

    </>
  );
};
