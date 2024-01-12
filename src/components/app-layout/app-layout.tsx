import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { DonationLink } from 'components/donation-link';
import { Footer } from 'components/footer';
import { FooterCopyright } from 'components/footer-copyright';
import { Logotype } from 'components/logotype';
import { Navbar } from 'components/navbar';
import { OverlayNav } from 'components/overlay-nav';
import Page from 'components/page';
import PartnerCard from 'components/partner-card';
import { PartnerList } from 'components/partner-list';
import { BurgerButton } from 'components/ui/burger-button';
import { Icon } from 'components/ui/icon';
import { Menu } from 'components/ui/menu';
import { usePartners } from 'services/api/partners-adapter';
import { useSettings } from 'services/api/settings-adapter';
import * as breakpoints from 'shared/breakpoints.js';
import { donationPath } from 'shared/constants/donation-path';
import { footerNavigationItems } from 'shared/constants/footer-navigation-items';
import { mainNavigationItems } from 'shared/constants/main-navigation-items';
import { participationFormPath } from 'shared/constants/participation-form-path';
import { socialLinkItems } from 'shared/constants/social-link-items';
import { useDisableBodyScroll } from 'shared/hooks/use-disable-body-scroll';
import { useMediaQuery } from 'shared/hooks/use-media-query';

import type { NavbarProps } from 'components/navbar';

interface AppLayoutProps {
  customNavbar?: React.ReactNode
  navbarProps?: Pick<NavbarProps, 'colors'>
  navbarAddon?: React.ReactNode
  hiddenPartners?: boolean
}

export const AppLayout: React.VFC<React.PropsWithChildren<AppLayoutProps>> = (props) => {
  const {
    children,
    customNavbar,
    navbarProps,
    navbarAddon,
    hiddenPartners,
  } = props;
  const { settings } = useSettings();
  const { partners } = usePartners({ onlyGeneral: true });
  const [isOverlayMenuOpen, setIsOverlayMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const router = useRouter();

  const toggleOverlayMenu = useCallback(() => {
    setIsOverlayMenuOpen(!isOverlayMenuOpen);
  }, [isOverlayMenuOpen]);

  useDisableBodyScroll(!!isMobile && isOverlayMenuOpen);

  useEffect(() => {
    if (!isMobile) {
      setIsOverlayMenuOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    const onChange = () => {
      setScrollPosition(window.scrollY);
      if (screen.orientation.type === 'landscape-primary') {
        window.scroll(0, scrollPosition * (window.outerWidth / window.outerHeight));
      }
    };
    screen.orientation.addEventListener('change', onChange);

    return () => {
      screen.orientation.removeEventListener('change', onChange);
    };
  }, [scrollPosition]);

  return (
    <Page>
      <Page.Navbar custom={!!customNavbar}>
        {customNavbar ? customNavbar : (
          <Navbar {...navbarProps}>
            <Navbar.Slot area="logotype">
              <Logotype
                href="/"
                title="Фестиваль Любимовка"
              />
            </Navbar.Slot>
            <Navbar.Slot area="actions">
              <Navbar.ActionsSlot
                type="main-navigation"
                as="nav"
              >
                <Menu type="main-navigation">
                  {mainNavigationItems
                    .filter(item => !item.mobileOnly)
                    .map((item) => (
                      <Menu.Item
                        key={item.href}
                        href={item.href}
                        current={router.asPath.startsWith(item.href)}
                      >
                        {item.text}
                      </Menu.Item>
                    ))}
                </Menu>
              </Navbar.ActionsSlot>
              <Navbar.ActionsSlot>
                <Menu type="social-links">
                  {socialLinkItems.map((item) => (
                    <Menu.Item key={item.href} href={item.href} target="_blank">
                      {item.text}
                    </Menu.Item>
                  ))}
                </Menu>
              </Navbar.ActionsSlot>
              <Navbar.ActionsSlot>
                <DonationLink href={donationPath}/>
              </Navbar.ActionsSlot>
            </Navbar.Slot>
            {navbarAddon && (
              <Navbar.Slot area="addon">
                {navbarAddon}
              </Navbar.Slot>
            )}
          </Navbar>
        )}
      </Page.Navbar>
      {children}
      <Page.Footer>
        <Footer privacyPolicyUrl={settings?.privacyPolicyUrl}>
          {!hiddenPartners && partners && !isEmpty(partners) && (
            <Footer.Partners>
              <PartnerList size="s">
                {partners.map((partner) => (
                  <PartnerList.Item key={partner.name}>
                    <PartnerCard
                      variant="compact"
                      titleTag="p"
                      logo={partner.logo}
                      name={partner.name}
                      description={partner.description}
                      url={partner.url}
                    />
                  </PartnerList.Item>
                ))}
              </PartnerList>
            </Footer.Partners>
          )}
          <Footer.Navigation>
            <Menu type="footer-navigation">
              {footerNavigationItems.map((item, index) => (
                <Menu.Item
                  key={index}
                  href={item.href}
                >
                  {item.text}
                </Menu.Item>
              ))}
            </Menu>
          </Footer.Navigation>
          <Footer.Projects>
            {!isEmpty(settings?.projects) && (
              <Menu type="footer-project-list">
                <Menu.Item href="/projects">
                  Все проекты
                </Menu.Item>
                {settings?.projects.map((item) => (
                  <Menu.Item
                    key={item.id}
                    href={`/projects/${item.id}`}
                  >
                    {item.title}
                  </Menu.Item>
                ))}
              </Menu>
            )}
          </Footer.Projects>
        </Footer>
      </Page.Footer>
      {isMobile && (
        <>
          <Page.OverlayMenu isOpen={isOverlayMenuOpen}>
            <OverlayNav>
              <OverlayNav.Logotype>
                <Logotype href="/" title="Фестиваль Любимовка"/>
              </OverlayNav.Logotype>
              <OverlayNav.Menu>
                <Menu type="overlay-navigation">
                  {mainNavigationItems.map((item) => (
                    <Menu.Item
                      key={item.href}
                      href={item.href}
                      current={router.asPath === item.href}
                    >
                      {item.text}
                    </Menu.Item>
                  ))}
                </Menu>
              </OverlayNav.Menu>
              <OverlayNav.Actions>
                <Menu type="overlay-actions">
                  {settings?.canProposePlay && (
                    <Menu.Item href={participationFormPath}>
                      Подать пьесу
                      <Icon glyph="arrow-right"/>
                    </Menu.Item>
                  )}
                  <Menu.Item href={donationPath}>
                    Поддержать
                    <Icon glyph="arrow-right"/>
                  </Menu.Item>
                </Menu>
              </OverlayNav.Actions>
              <OverlayNav.Socials>
                <Menu type="overlay-social-links">
                  {socialLinkItems.sort((a, b) => a.mobileOrder - b.mobileOrder).map((item) => (
                    <Menu.Item
                      key={item.href}
                      href={item.href}
                      mods={item.mods}
                    >
                      {item.text}
                      <Icon glyph="arrow-right"/>
                    </Menu.Item>
                  ))}
                </Menu>
              </OverlayNav.Socials>
              <OverlayNav.Copyright>
                <FooterCopyright privacyPolicyUrl={settings?.privacyPolicyUrl}/>
              </OverlayNav.Copyright>
            </OverlayNav>
          </Page.OverlayMenu>
          <Page.BurgerButton>
            <BurgerButton
              isOpen={isOverlayMenuOpen}
              onClick={toggleOverlayMenu}
            />
          </Page.BurgerButton>
        </>
      )}
    </Page>
  );
};

