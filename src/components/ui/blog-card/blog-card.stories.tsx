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

export const BlogCard_in_grid_some = (args) => (
  <ui style={CardBlockStyles}>
    <BlogCard {...args} />
    <BlogCard
      {...args}
      image={'https://img51994.domkino.tv/img/2018-10-29/fmt_114_24_iqshami78.jpg'}
    />
    <BlogCard
      {...args}
      image={'https://img51994.domkino.tv/img/2018-10-29/fmt_114_24_6.jpg'}
    />
    <BlogCard
      {...args}
      image={'https://i.pinimg.com/736x/8b/7b/ac/8b7bac354c8982477a701af6ca9e9128.jpg'}
    />
    <BlogCard
      {...args}
      image={'http://kudago.com/media/images/event/43/7a/437a0e0f05a59d217408ebe4380f72a7.jpg'}
    />
    <BlogCard
      {...args}
      image={'https://i1.wp.com/altereos.ru/wp-content/uploads/2019/05/Neokonchennaya-pesa-dlya-mehanicheskogo-pianino-1977.mkv-00003.jpg?ssl=1'}
    />
  </ui>
);
BlogCard_in_grid_some.args = {
  image: 'https://img51994.domkino.tv/img/2018-10-29/fmt_114_24_iqshami78.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
};
