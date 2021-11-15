import { FC, useState } from 'react';
import { useRouter } from 'next/router';

import { Page } from 'components/page';
import { Menu } from 'components/ui/menu';
import { Icon } from 'components/ui/icon';
import { Navbar } from 'components/navbar';
import { Logotype } from 'components/logotype';
import { Footer } from 'components/footer';
import { OverlayNav } from 'components/overlay-nav';
import { BurgerButton } from 'components/ui/burger-button';
import { FooterPartnerList } from 'components/footer-partner-list';
import { DonationLink } from 'components/donation-link';
import { WithAppSettingsProps, withAppSettings } from 'components/app';
import { mainNavigationItems } from 'shared/constants/main-navigation-items';
import { footerNavigationItems } from 'shared/constants/footer-navigation-items';
import { socialLinkItems } from 'shared/constants/social-link-items';
import { donationPath } from 'shared/constants/donation-path';
import { participationFormPath } from 'shared/constants/participation-form-path';
import * as breakpoints from 'shared/breakpoints.js';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import { useDisableBodyScroll } from 'shared/hooks/use-disable-body-scroll';

interface IAppLayoutProps extends WithAppSettingsProps{
  hiddenPartners?: boolean,
  backButton?: { path: string, text: string }
}

const AppLayout: FC<IAppLayoutProps> = (props) => {
  const {
    children,
    projects,
    generalPartners,
    hiddenPartners,
    backButton
  } = props;

  const [isOverlayMenuOpen, setIsOverlayMenuOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const router = useRouter();

  const toggleOverlayMenu = () => setIsOverlayMenuOpen(!isOverlayMenuOpen);

  useDisableBodyScroll(isOverlayMenuOpen);

  return (
    <Page>
      <Page.Header>
        <Navbar>
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
                      current={router.asPath === item.href}
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
      </Page.Header>
      {backButton && <Page.BackButton>
        <Button
          type='button'
          iconPlace='right'
          icon='arrow-left'
          size="s"
          border='bottomRight'
          isLink
          label={backButton.text}
          href={backButton.path} />
      </Page.BackButton>}
      {children}
      {isMobile && (
        <>
          <Page.OverlayMenu isOpen={isOverlayMenuOpen}>
            <OverlayNav>
              <OverlayNav.Logotype>
                <Logotype href='/' title="Фестиваль Любимовка"/>
              </OverlayNav.Logotype>
              <OverlayNav.Menu>
                <Menu type="overlay-navigation">
                  {mainNavigationItems.map((item) => (
                    <Menu.Item key={item.href} href={item.href}>
                      {item.text}
                    </Menu.Item>
                  ))}
                </Menu>
              </OverlayNav.Menu>
              <OverlayNav.Actions>
                <Menu type='overlay-actions'>
                  <Menu.Item href={participationFormPath}>
                    Подать пьесу
                    <Icon glyph='arrow-right'/>
                  </Menu.Item>
                  <Menu.Item href={donationPath}>
                    Поддержать
                    <Icon glyph='arrow-right'/>
                  </Menu.Item>
                </Menu>
              </OverlayNav.Actions>
              <OverlayNav.Socials>
                <Menu type='overlay-social-links'>
                  {socialLinkItems.map((item) => (
                    <Menu.Item
                      key={item.href}
                      href={item.href}
                      mods={{ primary: !!item.primary }}>
                      {item.text}
                      <Icon glyph='arrow-right'/>
                    </Menu.Item>
                  ))}
                </Menu>
              </OverlayNav.Socials>
            </OverlayNav>
          </Page.OverlayMenu>
          <Page.BurgerButton>
            <BurgerButton isOpen={isOverlayMenuOpen} onClick={toggleOverlayMenu}/>
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
