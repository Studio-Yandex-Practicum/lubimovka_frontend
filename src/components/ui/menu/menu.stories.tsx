import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Menu, IMenuProps } from './menu';

const EXAMPLE_ITEMS = [
  { title: 'Item1', href: '/#' },
  { title: 'Item2', href: '/#', active: true },
  { title: 'Item3', href: '/#' },
  { title: 'Item4', href: '/#' },
  { title: 'Item5', href: '/#' },
];

export default {
  title: 'UI/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (props: IMenuProps) => {
  const {view, ...restArgs} = props;
  const type = ({
    mainNavigation: 'navLink',
    pageNavigation: 'navLink',
    sectionNavigation: 'button',
    footerNavigation: 'navLink',
    tabs: 'button',
    socialLinks: 'link'
  } as const)[view ?? 'mainNavigation'];


  return <Menu view={view} {...restArgs}>
    {EXAMPLE_ITEMS.map(({ title, href, active }, idx) => (
      <Menu.Item active={active} href={type !== 'button' ? href : undefined} type={type} key={idx}>
        {title}
      </Menu.Item>
    ))}
  </Menu>;
};

export const MainNavigation = Template.bind({});
MainNavigation.args = {
  view: 'mainNavigation',
};
MainNavigation.decorators = [(Story) => <div style={{ display: 'flex', flex: 1, maxWidth: 'min(calc(420 * var(--vw-size-multiplier)), 420px)' }}><Story/></div>];

export const PageNavigation = Template.bind({});
PageNavigation.args = {
  view: 'pageNavigation',
};

export const sectionNavigation = Template.bind({});
sectionNavigation.args = {
  view: 'sectionNavigation',
};

export const footerNavigation = Template.bind({});
footerNavigation.args = {
  view: 'footerNavigation',
};

export const tabs = Template.bind({});
tabs.args = {
  view: 'tabs',
};

export const socialLinks = Template.bind({});
socialLinks.args = {
  view: 'socialLinks',
};


