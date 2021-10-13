import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import mockData from './assets/mock-cardData.json';
import MasonryGrid from './masonry-grid';
import { BlogCard } from '../blog-card';

export default {
  component: MasonryGrid,
  title: 'UI/Masonry Grid',
} as ComponentMeta<typeof MasonryGrid>;

const TemplateBig: ComponentStory<typeof MasonryGrid> = (args) => (
  <MasonryGrid {...args}>
    {mockData.map(card => {
      return <BlogCard
        key={card.id}
        image={card.image}
        author={card.author}
        heading={card.title}
        description={card.subtitle}
        link={card.link}
        firstCardSizeMode='big'
      />;
    })}
  </MasonryGrid>
);

const TemplateRegular: ComponentStory<typeof MasonryGrid> = (args) => (
  <MasonryGrid {...args}>
    {mockData.map(card => {
      return <BlogCard
        key={card.id}
        image={card.image}
        author={card.author}
        heading={card.title}
        description={card.subtitle}
        link={card.link}
        firstCardSizeMode='regular'
      />;
    })}
  </MasonryGrid>
);

export const Masonry_Grid_blog_big = TemplateBig.bind({});
export const Masonry_Grid_blog_regular = TemplateRegular.bind({});
