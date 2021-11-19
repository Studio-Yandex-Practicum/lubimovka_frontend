import { FC, useState } from 'react';

import { Page } from 'components/page';
import { Menu } from 'components/ui/menu';
import { Icon } from 'components/ui/icon';
import { Navbar } from 'components/navbar';
import { Logotype } from 'components/logotype';
import { Footer } from 'components/footer';
import { OverlayNav } from 'components/overlay-nav';
import { BurgerButton } from 'components/ui/burger-button';
import { FooterPartnerList } from 'components/footer-partner-list';
import { WithAppSettingsProps, withAppSettings } from 'components/app';
import { mainNavigationItems } from 'shared/constants/main-navigation-items';
import { footerNavigationItems } from 'shared/constants/footer-navigation-items';
import { formLink, donationLink } from 'shared/constants/main-navigation-actions';
import { socialLinkItems } from 'shared/constants/social-link-items';
import * as breakpoints from 'shared/breakpoints.js';
import { useMediaQuery } from 'shared/hooks/use-media-query';

interface IAppLayoutProps extends WithAppSettingsProps{
  hiddenPartners?: boolean,
}

const AppLayout: FC<IAppLayoutProps> = (props) => {
  const {
    children,
    projects,
    generalPartners,
    hiddenPartners,
  } = props;

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  const toggleOverlay = () => setIsOverlayOpen(!isOverlayOpen);

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
                {mainNavigationItems
                  .filter(item => !item.mobileOnly)
                  .map((item) => (
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
              <Navbar.HelpLink label={donationLink.text} href={donationLink.href}/>
            </Navbar.Section>
          </Navbar.Actions>
        </Navbar>
      </Page.Header>
      {children}
      {isMobile && (
        <>
          <Page.Overlay isOpen={isOverlayOpen}>
            <OverlayNav>
              <OverlayNav.Logotype>
                <Logotype href='/' title="Фестиваль Любимовка" />
              </OverlayNav.Logotype>
              <OverlayNav.Menu>
                <Menu type="overlay-navigation">
                  {mainNavigationItems.map((item, idx) => (
                    <Menu.Item key={idx} href={item.href}>
                      {item.text}
                    </Menu.Item>
                  ))}
                </Menu>
              </OverlayNav.Menu>
              <OverlayNav.Actions>
                <Menu type='overlay-actions'>
                  {[formLink, donationLink].map((item, idx) => (
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
                    <Menu.Item
                      key={idx}
                      href={item.href}
                      mods={{ primary: !!item.primary }}>
                      {item.text}
                      <Icon glyph='arrow-right' />
                    </Menu.Item>
                  ))}
                </Menu>
              </OverlayNav.Socials>
            </OverlayNav>
          </Page.Overlay>
          <Page.BurgerButton>
            <BurgerButton isOpen={isOverlayOpen} onClick={toggleOverlay} />
          </Page.BurgerButton>
        </>
      )}
      <Footer>
        {!hiddenPartners && (
          <Footer.Partners>
            <FooterPartnerList>
              {generalPartners.map((partner) => (
                <FooterPartnerList.Item
                  key={partner.name}
                  logo={partner.logo}
                  name={partner.name}
                />
              ))}
            </FooterPartnerList>
          </Footer.Partners>
        )}
        <Footer.Address>
          <span>
            Площадка «8/3»
          </span>
          Москва,{'\n'}
          ул. Казакова, 8, стр. 3{'\n'}
          Метро «Курская»{'\n'}
        </Footer.Address>
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
          <Menu type="footer-project-list">
            <Menu.Item href="/projects">
              Все проекты
            </Menu.Item>
            {projects.map((item, index) => (
              <Menu.Item
                key={index}
                href={`/projects/${item.slug}`}
              >
                {item.title}
              </Menu.Item>
            ))}
          </Menu>
        </Footer.Projects>
      </Footer>
    </Page>
  );
};

export default withAppSettings<IAppLayoutProps>(AppLayout);
