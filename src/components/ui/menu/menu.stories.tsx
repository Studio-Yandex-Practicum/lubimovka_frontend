import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Menu } from './menu';

const demoItems = [
  {
    text: 'Афиша',
    href: '/afisha',
  },
  {
    text: 'Библиотека',
    href: '/library',
  },
  {
    text: 'Проекты',
    href: '/projects',
  },
  {
    text: 'История',
    href: '/history',
  },
  {
    text: 'Блог',
    href: '/blog',
  },
  {
    text: 'Новости',
    href: '/news',
  },
  {
    text: 'О фестивале',
    href: '/what-we-do',
  },
  {
    text: 'Контакты',
    href: '/contacts',
  },
];

export default {
  title: 'UI/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu type={args.type}>
    {demoItems.map((item, index) => (
      <Menu.Item
        key={index}
        href={item.href}
      >
        {item.text}
      </Menu.Item>
    ))}
  </Menu>
);

export const MainNavigation = Template.bind({});
MainNavigation.args = {
  type: 'main-navigation',
};

export const SocialLinks = Template.bind({});
SocialLinks.args = {
  type: 'social-links',
};
