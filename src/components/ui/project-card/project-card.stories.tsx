import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProjectCard } from './project-card';

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => <ProjectCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  title: 'Любимовка.Ещё',
  description: 'Межсезонные читки и обсуждение пьес из списка отмеченных отборщиками Любимовки. Можно слушать, обсуждать и даже участвовать',
  image: 'https://source.unsplash.com/random/356×500',
  url: '#'
};
