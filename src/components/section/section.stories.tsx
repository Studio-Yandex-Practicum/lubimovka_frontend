import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Section } from './section';
import { BasicPlayCardList } from 'components/ui/basic-play-card';

import { Default as CardListDefault } from 'components/ui/basic-play-card/list/basic-play-card-list.stories';

export default {
  title: 'Components/Section',
  component: Section,
  subcomponents: { BasicPlayCardList },
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '1440px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = ({ ...args }) => {
  return (
    <Section {...args} />
  );
};

export const Default = Template.bind({});
Default.parameters = {
  layout: 'fullscreen'
};
Default.args = {
  children: <CardListDefault {...CardListDefault.args} />,
  type: 'plays',
  title: 'Заголовок секции с контентом'
};
