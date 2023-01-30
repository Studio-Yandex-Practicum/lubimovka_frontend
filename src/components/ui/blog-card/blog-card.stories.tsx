import React from 'react';

import { BlogCard } from './blog-card';

import type { ComponentMeta,ComponentStory } from '@storybook/react';

export default {
  component: BlogCard,
  title: 'Components/BlogCard',
} as ComponentMeta<typeof BlogCard>;

const Template: ComponentStory<typeof BlogCard> = (args) => <BlogCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  image: 'https://source.unsplash.com/random',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
};
