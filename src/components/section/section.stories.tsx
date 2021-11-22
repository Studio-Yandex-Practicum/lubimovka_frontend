import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Section } from 'components/section';
import { BasicPlayCardList } from 'components/ui/basic-play-card-list';

import { Default as DefaultBasicPlayCardList } from 'components/ui/basic-play-card-list/basic-play-card-list.stories';
import { Default as DefaultPersonCardList } from 'components/ui/person-card/list/person-card-list.stories';

export default {
  title: 'Components/Section',
  component: Section,
  subcomponents: { BasicPlayCardList },
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto', maxWidth: '1440px' }}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = ({ ...args }) => {
  return (
    <Section {...args}/>
  );
};

export const BasicPlayCard = Template.bind({});
BasicPlayCard.parameters = {
  layout: 'fullscreen'
};
BasicPlayCard.args = {
  children: <DefaultBasicPlayCardList {...DefaultBasicPlayCardList.args}/>,
  type: 'plays',
  title: 'Заголовок секции с контентом'
};

export const PersonCard = Template.bind({});
PersonCard.parameters = {
  layout: 'fullscreen'
};
PersonCard.args = {
  children: <DefaultPersonCardList {...DefaultPersonCardList.args}/>,
  type: 'persons',
  title: 'Заголовок секции с контентом'
};
