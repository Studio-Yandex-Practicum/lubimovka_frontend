import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BlogCard } from './blog-card';

export default {
  component: BlogCard,
  title: 'UI/Blog Card',
} as ComponentMeta<typeof BlogCard>;

const Template: ComponentStory<typeof BlogCard> = (args) => <BlogCard {...args}/>;

export const only_first_BlogCard = Template.bind({});
only_first_BlogCard.args = {
  image: '/images/blog/blog-image.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  id: 1,
  // link: 'https://lubimovka.ru/blog/888-int-emeleva',
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
      <Story/>
    </div>
  )
];

export const rectangular_vertical_aspectRatio_BlogCard = Template.bind({});
rectangular_vertical_aspectRatio_BlogCard.args = {
  image: '/images/blog/blog-image.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  id: 2,
};
rectangular_vertical_aspectRatio_BlogCard.decorators = [
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
      <Story/>
      <Story/>
    </div>
  )
];

export const rectangular_horizontal_aspectRatio_BlogCard = Template.bind({});
rectangular_horizontal_aspectRatio_BlogCard.args = {
  image: '/images/blog/blog-image.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  id: 3,
};
rectangular_horizontal_aspectRatio_BlogCard.decorators = [
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
      <Story/>
      <Story/>
    </div>
  )
];

export const square_aspectRatio_BlogCard = Template.bind({});
square_aspectRatio_BlogCard.args = {
  image: '/images/blog/blog-image.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  id: 4,
};
square_aspectRatio_BlogCard.decorators = [
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
      <Story/>
      <Story/>
    </div>
  )
];

export const grid_BlogCard = Template.bind({});
grid_BlogCard.args = {
  image: '/images/blog/blog-image.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  id: 5,
};
grid_BlogCard.decorators = [
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
