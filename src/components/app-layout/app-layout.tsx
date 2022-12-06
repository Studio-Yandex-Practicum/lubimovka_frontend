import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Page from 'components/page';
import { Menu } from 'components/ui/menu';
import { Icon } from 'components/ui/icon';
import { Navbar } from 'components/navbar';
import { Logotype } from 'components/logotype';
import { Footer } from 'components/footer';
import { OverlayNav } from 'components/overlay-nav';
import { BurgerButton } from 'components/ui/burger-button';
import { PartnerList } from 'components/partner-list';
import { FooterCopyright } from 'components/footer-copyright';
import { DonationLink } from 'components/donation-link';
import PartnerCard from 'components/partner-card';
import { mainNavigationItems } from 'shared/constants/main-navigation-items';
import { footerNavigationItems } from 'shared/constants/footer-navigation-items';
import { socialLinkItems } from 'shared/constants/social-link-items';
import { donationPath } from 'shared/constants/donation-path';
import { participationFormPath } from 'shared/constants/participation-form-path';
import { usePersistentData } from 'providers/persistent-data-provider';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import { useDisableBodyScroll } from 'shared/hooks/use-disable-body-scroll';
import * as breakpoints from 'shared/breakpoints.js';

import type { NavbarProps } from 'components/navbar';

interface AppLayoutProps {
  noNavbar?: boolean
  navbarProps?: Pick<NavbarProps, 'colors'>
}

export const AppLayout: React.VFC<React.PropsWithChildren<AppLayoutProps>> = (props) => {
  const {
    children,
    noNavbar,
    navbarProps,
  } = props;

  const { projects, generalPartners, settings } = usePersistentData();
  const [isOverlayMenuOpen, setIsOverlayMenuOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const router = useRouter();

  const toggleOverlayMenu = useCallback(() => {
    setIsOverlayMenuOpen(!isOverlayMenuOpen);
  }, [isOverlayMenuOpen]);

  useDisableBodyScroll(!!isMobile && isOverlayMenuOpen);

  useEffect(() => {
    if (!isMobile) setIsOverlayMenuOpen(false);
  }, [isMobile]);

  return (
    <Page>
      {noNavbar || (
        <Page.Navbar>
          <Navbar {...navbarProps}>
            <Navbar.Logotype>
              <Logotype
                href="/"
                title="Фестиваль Любимовка"
              />
            </Navbar.Logotype>
            <Navbar.Actions>
              <Navbar.Section primary>
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
              </Navbar.Section>
              <Navbar.Section>
                <Menu type="social-links">
                  {socialLinkItems.map((item) => (
                    <Menu.Item key={item.href} href={item.href}>
                      {item.text}
                    </Menu.Item>
                  ))}
                </Menu>
              </Navbar.Section>
              <Navbar.Section>
                <DonationLink href={donationPath}/>
              </Navbar.Section>
            </Navbar.Actions>
          </Navbar>
        </Page.Navbar>
      )}
      {children}
      <Page.Footer>
        <Footer privacyPolicyUrl={settings?.privacyPolicyUrl}>
          {generalPartners && generalPartners?.length > 0 && (
            <Footer.Partners>
              <PartnerList size="s">
                {generalPartners.map((partner) => (
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
            {projects && projects.length > 0 && (
              <Menu type="footer-project-list">
                <Menu.Item href="/projects">
                  Все проекты
                </Menu.Item>
                {projects.map((item) => (
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
