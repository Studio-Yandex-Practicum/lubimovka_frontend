import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BlogCard } from './blog-card';

export default {
  component: BlogCard,
  title: 'Blog Card',
} as Meta;

const Template: Story<typeof BlogCard> = (args) => <BlogCard {...args} />;

export const BlogCard_default = Template.bind({});
BlogCard_default.args = {
  image: 'https://img51994.domkino.tv/img/2018-10-29/fmt_114_24_iqshami78.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
};

const CardBlockStyles = {
  'margin': '0 auto',
  'padding': '0',
  'listStyle': 'none',
  'maxWidth': '1260px',
  'display': 'grid',
  'gridAutoFlow': 'dense',
  'gridTemplateColumns': 'repeat(auto-fill, 270px)',
  'justifyContent': 'center',
  'gap': '47px 60px',
  'position': 'relative'
};

export const BlogCard_in_grid_first = (args) => (
  <ui style={CardBlockStyles}>
    <BlogCard {...args} />
  </ui>
);
BlogCard_in_grid_first.args = {
  image: 'https://img51994.domkino.tv/img/2018-10-29/fmt_114_24_iqshami78.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
};
