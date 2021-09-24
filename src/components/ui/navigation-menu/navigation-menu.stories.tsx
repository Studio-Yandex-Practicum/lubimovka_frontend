import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavigationMenu } from './navigation-menu';
import { NAVIGATION_MENU_ITEMS, LIBRARY_TABS } from '../../../shared/constants';

import styles from './navigation-menu.stories.module.css';

export default {
  title: 'UI/NavigationMenu',
  component: NavigationMenu,
} as ComponentMeta<typeof NavigationMenu>;

const Template: ComponentStory<typeof NavigationMenu> = (args) => <NavigationMenu {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  items: NAVIGATION_MENU_ITEMS,
  itemClassName: styles.rowItem,
};

export const Mobile = Template.bind({});
Mobile.args = {
  items: NAVIGATION_MENU_ITEMS,
  size: 'l',
  className: styles.column,
  itemClassName: styles.columnItem,
};

export const Tabs = Template.bind({});
Tabs.args = {
  items: LIBRARY_TABS,
  size: 'l',
  itemClassName: styles.tabItem,
};
