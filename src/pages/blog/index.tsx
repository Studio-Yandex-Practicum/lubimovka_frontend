import { NextPage } from 'next';
import Head from 'next/head';

import { AppLayout } from 'components/app-layout/index';
// import MasonryGrid from 'components/ui/masonry-grid/masonry-grid';
import { SectionTitleForBlog } from 'components/section-title-for-blog/section-title-for-blog';
// import { BlogCard } from 'components/ui/blog-card';
// import data from './assets/mock-cardData.json';

interface IBlogProps {
  metaTitle: string;
}
const Blog: NextPage<IBlogProps> = (props: IBlogProps) => {
  const { metaTitle } = props;
  return (
    <AppLayout>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <SectionTitleForBlog email='critics@lubimovka.ru'/>
      {/* <MasonryGrid>
        {data.map((card) => {
          return (
            <BlogCard
              key={card.id}
              image={card.image}
              author={card.author}
              heading={card.title}
              description={card.subtitle}
              link={card.link}
              firstCardSizeMode='big'
            />
          );
        })}
      </MasonryGrid> */}
    </AppLayout>
  );
};

export default Blog;
