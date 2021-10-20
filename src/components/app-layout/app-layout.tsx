import { FC } from 'react';

import { Page } from 'components/page';
import { Menu } from 'components/ui/menu';
import { Icon } from 'components/ui/icon';
import { Navbar } from 'components/navbar';
import { Logotype } from 'components/logotype';

import { mainNavigationItems } from 'shared/constants/main-navigation-items';
import { overlayNavigationItems } from 'shared/constants/overlay-navigation-items';
import { overlayActionItems } from 'shared/constants/overlay-action-items';
import { socialLinkItems } from 'shared/constants/social-link-items';
import { OverlayNav } from 'components/overlay-nav';
import * as breakpoints from 'shared/breakpoints.js';

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
      <Page.Overlay isOpen={false && isMobile}>
        <OverlayNav>
          <OverlayNav.Logotype>
            <Logotype href='/' title="Фестиваль Любимовка" />
          </OverlayNav.Logotype>
          <OverlayNav.Menu>
            <Menu type="overlay-navigation">
              {overlayNavigationItems.map((item, idx) => (
                <Menu.Item key={idx} href={item.href}>
                  {item.text}
                </Menu.Item>
              ))}
            </Menu>
          </OverlayNav.Menu>
          <OverlayNav.Actions>
            <Menu type='overlay-actions'>
              {overlayActionItems.map((item, idx) => (
                <Menu.Item key={idx} href={item.href}>
                  {item.text}
                  <Icon glyph='arrow-right' />
                </Menu.Item>
              ))}
            </Menu>
          </OverlayNav.Actions>
          <OverlayNav.Socials>
            <Menu type='overlay-social-links'>
              {socialLinkItems.map((item, idx) => (
                <Menu.Item key={idx} href={item.href} primary={item.primary}>
                  {item.text}
                  <Icon glyph='arrow-right' />
                </Menu.Item>
              ))}
            </Menu>
          </OverlayNav.Socials>
        </OverlayNav>
      </Page.Overlay>
    </Page>
  );
};
