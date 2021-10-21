import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PlayProposalSuccess } from './play-proposal-success';

export default {
  title: 'Components/PlayProposalSuccess',
  component: PlayProposalSuccess,
} as ComponentMeta<typeof PlayProposalSuccess>;

const Template: ComponentStory<typeof PlayProposalSuccess> = () => <PlayProposalSuccess/>;

export const Default = Template.bind({});

