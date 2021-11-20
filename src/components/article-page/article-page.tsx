import React, { FC } from 'react';
import Head from 'next/head';
import cn from 'classnames/bind';
import styles from './article-page.module.css';

import ArticleTitle from './article-title/article-title';
import { Section } from '../section';
import {BasicPlayCard, BasicPlayCardList, IBasicPlayCardProps} from '../ui/basic-play-card';
import {IPersonCardProps, PersonCard, PersonCardList} from '../ui/person-card';
import {ArticleMainText} from './article-maintext';
import ArticleShare from './article-share/article-share';
import {ImageSlider, TImageItem} from '../ui/image-slider';
import ArticleOther from './article-other/article-other';

import DataTitle from './assets/mock-data-title.json';
import DataPlays from './assets/mock-data-plays.json';
import DataPersons from './assets/mock-data-persons.json';
import ArticleText from './assets/mock-data-article-main-text.json';
import DataShare from './assets/mock-data-share.json';

const cx = cn.bind(styles);

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
      <main>
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
          {ArticleText.contents.map((item, idx) => {
            switch (item.content_type) {
            case 'preamble':
              return(<h6 key={idx}>{item.content_item.preamble}</h6>);
            case 'title':
              return(<h4 key={idx}>{item.content_item.title}</h4>);
            case 'quote':
              return(<blockquote key={idx}>{item.content_item.quote}</blockquote>);
            case 'text':
              return(<p key={idx}>{item.content_item.text}</p>);
            case 'imagesblock':
              return(<ImageSlider images={item.content_item.items as TImageItem[]} className={cx('imagesblock')}/>);
            }
          })}
        </ArticleMainText>
        <Section type={'plays'} title={'Заголовок блока с пьессами'} className={cx('sectionPlaysList')}>
          <BasicPlayCardList>
            {(DataPlays as IBasicPlayCardProps[]).map((item, idx) => (
              <BasicPlayCard key={idx} {...item}/>
            ))}
          </BasicPlayCardList>
        </Section>
        <Section type={'persons'} title={'Заголовок блока с персонами'} className={cx('sectionPersonsList')}>
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
      </main>
      <ArticleOther isBlog={isBlog}/>
    </>
  );
};
