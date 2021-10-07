import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleSection } from './article-section';

export default {
  title: 'UI/ArticleSection',
  component: ArticleSection,
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '1440px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof ArticleSection>;

const Template: ComponentStory<typeof ArticleSection> = (args) => {
  return (
    <ArticleSection {...args} title={'Заголовок секции с контентом'}>
      <div
        style={{
          marginTop: '48px',
          marginLeft: '24px',
          width: '100%',
          display: 'flex',
          gap: '30px',
          overflowX: 'auto'
        }}
      >
        {Array.from(Array(5)).map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '240px',
              height: '300px',
              backgroundColor: 'var(--light-green)',
              flexShrink: 0,
            }}
          >
            {'Пример контента'}
          </div>
        ))}
      </div>
    </ArticleSection>
  );
};

export const Default = Template.bind({});
Default.parameters = {
  layout: 'fullscreen'
};
