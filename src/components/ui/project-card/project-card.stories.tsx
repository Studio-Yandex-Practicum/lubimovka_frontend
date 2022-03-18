import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectCard } from './project-card';

export default {
  title: 'UI/ProjectCard',
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args}/>;

export const LubimovkaMore = Template.bind({});
LubimovkaMore.args = {
  id: 1,
  title: 'Любимовка.Ещё',
  description: 'Межсезонные читки и обсуждение пьес из списка отмеченных отборщиками Любимовки. Можно слушать, обсуждать и даже участвовать',
  image: 'http://rtcam.ru/images/lubimovka/projects/praktika.jpg',
};
