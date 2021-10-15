import {ComponentMeta, ComponentStory} from '@storybook/react';

import { BlockquoteExample } from './article-maintext';

export default {
  title: 'ui/BlockquoteExample',
  component: BlockquoteExample,
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '1440px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof BlockquoteExample>;

const Template: ComponentStory<typeof BlockquoteExample> = (args) => <BlockquoteExample {...args}/>;

export const Blockquote = Template.bind({});
Blockquote.parameters = {
  layout: 'fullscreen'
};
Blockquote.args = {
  children: <blockquote>Настал именно режиссерский театр, потому что пространство высказывания оказалось все в руках режиссеров, и они использовали доступную драматургию, классическую или импортную, чтобы сделать свое высказывание о реальности.</blockquote>
};
