import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import styles from './project-cooperation.stories.module.css';

import { ProjectCooperation } from './project-cooperation';

const cx = classNames.bind(styles);

export default {
  title: 'Components/ProjectCooperation',
  component: ProjectCooperation,
  decorators: [
    (Story) => (
      <div className={cx('storiesСontainer')}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof ProjectCooperation>;

const Template: ComponentStory<typeof ProjectCooperation> = (args) => {
  return <ProjectCooperation {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  email: 'more@lubimovka.ru'
};

Default.parameters = {
  layout: 'fullscreen',
};
