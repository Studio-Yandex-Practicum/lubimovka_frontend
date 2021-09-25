import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Project } from './project';

export default {
  title: 'Example/project',
  component: Project,
} as ComponentMeta<typeof Project>;

const Template: ComponentStory<typeof Project> = (args) => <Project {...args} />;

export const LubimovkaMore = Template.bind({});
LubimovkaMore.args = {  
  data: {
    imgUrl: 'http://rtcam.ru/images/lubimovka/projects/more.jpg',
    imgAlt: 'Люди в зрительном зале',
    title: 'Любимовка.Ещё',
    text: 'Межсезонные читки и обсуждение пьес из списка отмеченных отборщиками Любимовки. Можно слушать, обсуждать и даже участвовать',
  },
};
