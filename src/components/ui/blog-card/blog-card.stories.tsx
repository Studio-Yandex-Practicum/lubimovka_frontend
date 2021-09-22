import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlogCard } from './blog-card';

export default {
  component: BlogCard,
  title: 'Blog Card',
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof BlogCard>;

const Template: ComponentStory<typeof BlogCard> = (args) => <BlogCard {...args} />;

export const only_first_BlogCard = Template.bind({});
only_first_BlogCard.args = {
  image: 'https://img51994.domkino.tv/img/2018-10-29/fmt_114_24_iqshami78.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
};
only_first_BlogCard.decorators = [
  (Story) => (
    <div style={{
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
    }}>
      <Story />
    </div >
  )
];
export const some_BlogCard = Template.bind({});
some_BlogCard.args = {
  image: 'https://img51994.domkino.tv/img/2018-10-29/fmt_114_24_iqshami78.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
};
some_BlogCard.decorators = [
  (Story) => (
    <div style={{
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
    }}>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div >
  )
];
