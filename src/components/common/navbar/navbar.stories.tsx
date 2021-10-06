import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from './navbar';
import { Menu } from 'components/ui/menu';
import { HEADER_MAIN_NAVIGATION_ITEMS } from 'shared/constants/header-navigation-items';
import { HEADER_SOCIAL_ITEMS } from 'shared/constants/header-social-items';

import { Icon } from 'components/ui/icon';

export default {
  title: 'Common/Header',
  component: Navbar,
  decorators: [
    (Story) => (
      <div style={{margin: '0 auto', maxWidth: '1440px'}}>
        <Story/>
      </div>
    ),
  ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args}>
    <Navbar.Logo />
    <Navbar.Section container='nav' width='max' showSeparator>
      <Menu view="mainNavigation">
        {HEADER_MAIN_NAVIGATION_ITEMS.map(({ title, href }, idx) => (
          <Menu.Item
            key={idx}
            href={href}
            type='navLink'
          >
            {title}
          </Menu.Item>
        ))}
      </Menu>
    </Navbar.Section>
    <Navbar.Section showSeparator>
      <Menu view="socialLinks">
        {HEADER_SOCIAL_ITEMS.map(({ title, href }, idx) => (
          <Menu.Item
            key={idx}
            href={href}
            type='link'
            target='_blank'
          >
            {title}
          </Menu.Item>
        ))}
      </Menu>
    </Navbar.Section>
    <Navbar.SupportLink href={'/donate'}>
      <Icon glyph='plus'/>
      Поддержать
    </Navbar.SupportLink>
  </Navbar>
);

export const Default = Template.bind({});
Default.parameters = {
  layout: 'fullscreen'
};
