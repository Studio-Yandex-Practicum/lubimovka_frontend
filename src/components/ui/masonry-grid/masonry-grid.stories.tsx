import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import mockData from './assets/mock-cardData.json';
import MasonryGrid from './masonry-grid';

export default {
  component: MasonryGrid,
  title: 'UI/MasonryGrid',
} as ComponentMeta<typeof MasonryGrid>;

const Template: ComponentStory<typeof MasonryGrid> = (args) => <MasonryGrid {...args} />;

export const MasonryGridExample = Template.bind({});
MasonryGridExample.args = {
  cardsData: mockData,
};
