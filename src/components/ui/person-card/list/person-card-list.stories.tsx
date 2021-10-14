/* eslint-disable react/prop-types */
import { ComponentMeta, Story } from '@storybook/react';

import { PersonCardList, PersonCard, IPersonCardProps } from '..';

import { Participant } from '../person-card.stories';

export default {
  title: 'ui/PersonCardList',
  component: PersonCardList,
  subcomponents: { PersonCard },
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '1440px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof PersonCardList>;

const ListTemplate: Story = ({ items, ...args }) => (
  <PersonCardList {...args}>
    {(items as IPersonCardProps[]).map((item, idx) => (
      <PersonCard key={idx} {...item}/>
    ))}
  </PersonCardList>
);

export const Default = ListTemplate.bind({});
Default.parameters = {
  layout: 'fullscreen'
};
Default.args = {
  items: Array.from(Array(7)).map(() => Participant.args),
  gapLarge: true,
};

