import { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames/bind';

import { Section } from 'components/section';
import { BasicPlayCard, IBasicPlayCardProps } from 'components/ui/basic-play-card';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';
import { IPersonCardProps, PersonCard, PersonCardList } from 'components/ui/person-card';
import { ImageSlider } from 'components/ui/image-slider';
import ArticleText from './assets/mock-data-article-main-text.json';
import ArticleTitle from './article-title/article-title';
import ArticleShare from './article-share/article-share';
import { ArticleMainText } from './article-maintext';
import DataShare from './assets/mock-data-share.json';

import styles from './article-page.module.css';
import DataTitle from './assets/mock-data-title.json';
import DataPlays from './assets/mock-data-plays.json';
import DataPersons from './assets/mock-data-persons.json';

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
              return(<ImageSlider className={cx('imagesblock')}>
                {item.content_item.items!.map((image, index) => (
                  <Image
                    key={index}
                    src={image.image}
                    alt={image.title}
                    layout="fill"
                    objectFit='cover'
                  />
                ))}</ImageSlider>);
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
      {/*<ArticleOther/>*/}
    </>
  );
};
