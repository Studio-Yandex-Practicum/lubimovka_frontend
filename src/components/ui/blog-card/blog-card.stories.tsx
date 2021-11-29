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
  image: 'https://img51994.domkino.tv/img/2018-10-29/fmt_114_24_iqshami78.jpg',
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
  image: 'https://i.pinimg.com/736x/5d/af/0c/5daf0ca101f778d66a4de3af8ef84a84--places-to-go-places-to-travel.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  link: 'https://lubimovka.ru/blog/888-int-emeleva',
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
  image: 'https://s.yimg.com/uu/api/res/1.2/eFqHZOqhdpQq1LNxU60cfA--~B/aD0xMDAwO3c9MTUwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/people_218/489476b970da652ecadb3c43670f203f',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  link: 'https://lubimovka.ru/blog/888-int-emeleva',
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
  image: 'https://images-na.ssl-images-amazon.com/images/I/91D4p2ePM%2BL._SL1500_.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  link: 'https://lubimovka.ru/blog/888-int-emeleva',
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
  image: 'https://img51994.domkino.tv/img/2018-10-29/fmt_114_24_iqshami78.jpg',
  author: 'Лара Бессмертная',
  heading: '«Человек является источником жеста, смысла, правды»',
  description: 'МК «Документальность в современном театре и современном искусстве»',
  link: 'https://lubimovka.ru/blog/888-int-emeleva',
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
