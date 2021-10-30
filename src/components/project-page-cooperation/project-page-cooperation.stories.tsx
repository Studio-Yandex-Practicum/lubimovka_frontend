import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import styles from './project-page-cooperation.stories.module.css';

import { ProjectPageCooperation } from './project-page-cooperation';

const cx = classNames.bind(styles);

export default {
  title: 'Components/ProjectPageCooperation',
  component: ProjectPageCooperation,
  decorators: [
    (Story) => (
      <div className={cx('stories-container')}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof ProjectPageCooperation>;

const Template: ComponentStory<typeof ProjectPageCooperation> = (args) => {
  return <ProjectPageCooperation {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  email: 'more@lubimovka.ru'
};

Default.parameters = {
  layout: 'fullscreen',
};
