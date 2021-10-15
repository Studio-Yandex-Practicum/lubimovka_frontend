import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Section } from './section';

export default {
  title: 'Components/Section',
  component: Section,
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '1440px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => {
  return (
    <Section {...args} type='plays' title={'Заголовок секции с контентом'}>
      <div
        style={{
          width: '100%',
          height: '400px',
          backgroundColor: 'grey'
        }}
      />
    </Section>
  );
};

export const Default = Template.bind({});
Default.parameters = {
  layout: 'fullscreen'
};
