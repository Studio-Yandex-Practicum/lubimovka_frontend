import {ComponentMeta, ComponentStory} from '@storybook/react';

import { ArticleMainText } from './article-maintext';

import ArticleText from './assets/mock-data-articleText';

export default {
  title: 'components/ArticleMainText',
  component: ArticleMainText,
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof ArticleMainText>;

const Template: ComponentStory<typeof ArticleMainText> = (args) => <ArticleMainText {...args}/>;

export const MainText = Template.bind({});
MainText.parameters = {
  layout: 'fullscreen'
};
MainText.args = {
  children: ArticleText(),
};
