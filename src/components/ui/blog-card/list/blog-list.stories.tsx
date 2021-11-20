/* eslint-disable react/prop-types */
import { ComponentMeta, Story } from '@storybook/react';

import { BlogCard, BlogCardProps } from '..';
import {BlogList} from './blog-list';
import BlogListData from './mock-data-blog-list.json';

export default {
  title: 'ui/BlogList',
  component: BlogList,
  subcomponents: { BlogCard },
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '1262px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof BlogList>;

const ListTemplate: Story = ({ items, ...args }) => (
  <BlogList {...args}>
    {(items as BlogCardProps[]).map((item, idx) => (
      <BlogCard key={idx} {...item}/>
    ))}
  </BlogList>
);

export const Default = ListTemplate.bind({});
Default.parameters = {
  layout: 'fullscreen'
};
Default.args = {
  items: BlogListData,
};

