import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';


import AppLayout from 'components/app-layout/index';
// import MasonryGrid from 'components/ui/masonry-grid/masonry-grid';
import { SectionTitleForBlog } from 'components/section-title-for-blog/section-title-for-blog';
import { fetcher } from 'shared/fetcher';
import { PaginatedBlogItemListList } from 'api-typings';
import { BlogItemList } from 'api-typings/models/BlogItemList';

// import { BlogCard } from 'components/ui/blog-card';
// import data from './assets/mock-cardData.json';

interface IBlogProps {
  metaTitle: string;
}
const Blog: NextPage<IBlogProps> = (props: IBlogProps) => {
  const { metaTitle } = props;

  const [blogs, setBlogs] = useState<Array<BlogItemList> | undefined>(undefined);

  const fetchPerformance = async () => {
    let data;
    try {
      data = await fetcher<PaginatedBlogItemListList>('/blog');
    } catch (error) {
      return;
    }
    return data;
  };

  // TODO: будет ли какой-нибудь лоадер?
  useEffect(() => {
    fetchPerformance()
      .then(data => {
        return setBlogs(data?.results);
      })
      // TODO: как-то обработать ошибку. Должен пользователь о ней знать? Если да - то как ее выводить?
      .catch(err => alert(`err: ${err}`));
  }, []);

  // Этот useEffect нужен для проверки получения значений blogs. В дальнейшем, когда прикрутим MasonryGrid - его удалим за ненадобностью.
  // TODO: удалить useEffect
  useEffect(() => {
    if (blogs !== undefined && blogs.length > 0)
      console.log('useEffect', blogs);
  }, [blogs]);

  return (
    <AppLayout>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <SectionTitleForBlog email='critics@lubimovka.ru' setBlogs={setBlogs}/>
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
