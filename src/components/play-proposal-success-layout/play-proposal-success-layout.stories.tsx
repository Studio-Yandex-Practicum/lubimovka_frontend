import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PlayProposalSuccessLayout } from './play-proposal-success-layout';

export default {
  title: 'Components/PlayProposalSuccess',
  component: PlayProposalSuccessLayout,
} as ComponentMeta<typeof PlayProposalSuccessLayout>;

const Template: ComponentStory<typeof PlayProposalSuccessLayout> = () => <PlayProposalSuccessLayout/>;

export const Default = Template.bind({});
