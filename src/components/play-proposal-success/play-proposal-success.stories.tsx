import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlayProposalSuccess } from './play-proposal-success';

export default {
  title: 'Components/PlayProposalSuccess',
  component: PlayProposalSuccess,
} as ComponentMeta<typeof PlayProposalSuccess>;

const Template: ComponentStory<typeof PlayProposalSuccess> = (args) => <PlayProposalSuccess {...args} />;

export const Default = Template.bind({});
Default.args = {
  /* image: 'https://source.unsplash.com/random', */
  title:'Спасибо, мы получили вашу пьесу, скоро начнется отбор. Следите за новостями в наших соцсетях!',
};
