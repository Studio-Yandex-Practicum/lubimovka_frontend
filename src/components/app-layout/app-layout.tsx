import { FC } from 'react';

import { Page } from 'components/page';
import { Menu } from 'components/ui/menu';
import { Navbar } from 'components/navbar';
import { Logotype } from 'components/logotype';

import { mainNavigationItems } from 'shared/constants/main-navigation-items';
import { overlayNavigationItems } from 'shared/constants/overlay-navigation-items';
import { overlayActionItems } from 'shared/constants/overlay-action-items';
import { socialLinkItems } from 'shared/constants/social-link-items';
import { OverlayNav } from 'components/overlay-nav';

export const AppLayout: FC = (props) => {
  const { children } = props;

  return (
    <Page>
      <Page.Header>
        <Navbar>
          <Navbar.Logotype>
            <Logotype
              href="#"
              title="Фестиваль Любимовка"
            />
          </Navbar.Logotype>
          <Navbar.Actions>
            <Navbar.Section primary>
              <Menu type="main-navigation">
                {mainNavigationItems.map((item) => (
                  <Menu.Item key={item.text} href={item.href}>
                    {item.text}
                  </Menu.Item>
                ))}
              </Menu>
            </Navbar.Section>
            <Navbar.Section>
              <Menu type="social-links">
                {socialLinkItems.map((item) => (
                  <Menu.Item key={item.text} href={item.href}>
                    {item.text}
                  </Menu.Item>
                ))}
              </Menu>
            </Navbar.Section>
            <Navbar.Section>
              <Navbar.HelpLink href="#"/>
            </Navbar.Section>
          </Navbar.Actions>
        </Navbar>
      </Page.Header>
      {children}
      <OverlayNav
        isOpen={false}
        navLinks={overlayNavigationItems}
        actionLinks={overlayActionItems}
        socialLinks={socialLinkItems}
      />
    </Page>
  );
};
