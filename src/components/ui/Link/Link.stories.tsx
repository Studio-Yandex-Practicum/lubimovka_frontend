import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from './Link';

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkInHeading = Template.bind({});
LinkInHeading.args = {
  size: 's',
  border: 'borderBottomLeft',
  label: 'Fb',
  withIcon: true,
  icon: true,
  iconSide: true
};

export const LinkInTextBlocks = Template.bind({});
LinkInTextBlocks.args = {
  size: 'l',
  textDecoration: 'underline',
  label: 'more@lubimovka.ru',
  withIcon: false
};

export const LinkWithArrowRight = Template.bind({});
LinkWithArrowRight.args = {
  size: 'm',
  label: 'Казакова, 8, стр. 3',
  withIcon: true,
  icon: true,
  iconSide: false
};

export const LinkWithArrow45 = Template.bind({});
LinkWithArrow45.args = {
  size: 'm',
  label: 'Лера Бессмертная',
  withIcon: true,
  icon: false,
  iconSide: false
};

export const LinkInTable = Template.bind({});
LinkInTable.args = {
  size: 'xl',
  border: 'borderTop',
  label: 'Интервью 2020',
  withIcon: true,
  icon: true,
  iconSide: false
};

export const LinkNumber = Template.bind({});
LinkNumber.args = {
  size: 'number',
  label: '145',
  withIcon: true,
  icon: true,
  iconSide: false
};

export const LinkInfoInFooter = Template.bind({});
LinkInfoInFooter.args = {
  size: 'xs',
  label: 'Контакты',
  withIcon: false,
  section: 'infoFooter'
};

export const LinkInFooter = Template.bind({});
LinkInFooter.args = {
  size: 'xs',
  label: 'shishki.collective',
  withIcon: false,
  section: 'footer'
};

