import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from './tag';

export default {
  title: 'UI/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Example = Template.bind({});
Example.args = {
  label: 'внеконкурсная программа',
  selected: false
};
export const SelectExample = Template.bind({});
SelectExample.args = {
  label: 'внеконкурсная программа',
  selected: true
};
