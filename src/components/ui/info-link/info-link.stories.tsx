import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InfoLink } from './info-link';

export default {
  title: 'UI/InfoLink',
  component: InfoLink,
} as ComponentMeta<typeof InfoLink>;

const Template: ComponentStory<typeof InfoLink> = (args) => <InfoLink {...args} />;

export const LinkInHeading = Template.bind({});
LinkInHeading.args = {
  isOutsideLink: true,
  href: 'https://www.facebook.com/festival.lubimovka',
  label: 'Fb',
  icon: 'arrow-right',
  iconPlace: 'left',
  size: 's',
  border: 'borderBottomLeft'
};

export const LinkInTextBlocks = Template.bind({});
LinkInTextBlocks.args = {
  isOutsideLink: true,
  href: 'mailto://more@lubimovka.ru',
  label: 'more@lubimovka.ru',
  size: 'l',
  textDecoration: 'underline'
};

export const LinkWithArrowRight = Template.bind({});
LinkWithArrowRight.args = {
  isOutsideLink: true,
  label: 'Казакова, 8, стр. 3',
  icon: 'arrow-right',
  iconPlace: 'right',
  size: 'm'
};

export const LinkWithArrow45 = Template.bind({});
LinkWithArrow45.args = {
  isOutsideLink: true,
  label: 'Лера Бессмертная',
  icon: 'arrow-45',
  iconPlace: 'right',
  size: 'm'
};

export const LinkInTable = Template.bind({});
LinkInTable.args = {
  label: 'Интервью 2020',
  icon: 'arrow-right',
  iconPlace: 'right',
  size: 'xl',
  border: 'borderTop'
};

export const LinkNumber = Template.bind({});
LinkNumber.args = {
  label: '145',
  icon: 'arrow-right',
  iconPlace: 'right',
  size: 'number'
};

export const LinkInfoInFooter = Template.bind({});
LinkInfoInFooter.args = {
  label: 'Контакты',
  section: 'infoFooter',
  size: 'xs',
};

export const LinkInFooter = Template.bind({});
LinkInFooter.args = {
  isOutsideLink: true,
  href: 'https://ru.shishki.co/',
  label: 'shishki.collective',
  section: 'footer',
  size: 'xs'
};
