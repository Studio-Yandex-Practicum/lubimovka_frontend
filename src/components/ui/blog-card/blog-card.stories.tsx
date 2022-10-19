import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlogCard } from './blog-card';

const fakeData = {
  image: '/',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  id: 1
};

const style = {
  margin: '0 auto',
  padding: '0',
  listStyle: 'none',
  maxWidth: '1260px',
  display: 'grid',
  gridAutoFlow: 'dense',
  gridTemplateColumns: 'repeat(auto-fill, 270px)',
  justifyContent: 'center',
  gap: '47px 60px',
  position: 'relative'
} as Record<string, string>;

export default {
  component: BlogCard,
  title: 'UI/Blog Card',
} as ComponentMeta<typeof BlogCard>;

const Template: ComponentStory<typeof BlogCard> = (args) => <BlogCard {...args}/>;

export const squareAspectRatioBlogCard = Template.bind({});
squareAspectRatioBlogCard.args = fakeData;
squareAspectRatioBlogCard.decorators = [
  (Story) => (
    <div style={style}>
      <Story/>
      <Story/>
    </div>
  )
];

export const gridBlogCard = Template.bind({});
gridBlogCard.args = fakeData;
gridBlogCard.decorators = [
  (Story) => (
    <div style={style}>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
      <Story/>
    </div>
  )
];
