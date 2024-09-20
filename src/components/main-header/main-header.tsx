import classNames from 'classnames/bind';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { DonationLink } from 'components/donation-link';
import { Logotype } from 'components/logotype';
import { Navbar } from 'components/navbar';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { Menu } from 'components/ui/menu';
import { donationPath } from 'shared/constants/donation-path';
import { mainNavigationItems } from 'shared/constants/main-navigation-items';
import { socialLinkItems } from 'shared/constants/social-link-items';
import { useIntersection } from 'shared/hooks/use-intersection';

import styles from './main-header.module.css';

interface MainHeaderProps {
  className?: string
  cover: Url
  title: string
  actionText: string
  actionUrl: string
}

const cx = classNames.bind(styles);

export const MainHeader: React.VFC<MainHeaderProps> = (props) => {
  const {
    className,
    cover,
    title,
    actionUrl,
    actionText,
  } = props;

  const router = useRouter();
  const [containerElRef, isContainerElInViewport] = useIntersection({ threshold: 0.1 });

  return (
    <div
      ref={containerElRef}
      className={cx('root', className)}
    >
      <div className={cx('cover')}>
        <Image
          src={cover}
          alt=""
          layout="fill"
          objectFit="cover"
          sizes="100vw"
        />
      </div>
      <div
        className={cx(
          'navbar',
          { pinned: !isContainerElInViewport }
        )}
      >
        <Navbar view={isContainerElInViewport ? 'expanded' : 'regular'}>
          <Navbar.Slot area="logotype">
            <Logotype
              href="/"
              title="Фестиваль Любимовка"
              full={isContainerElInViewport}
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
                  <Menu.Item key={item.href} href={item.href}>
                    {item.text}
                  </Menu.Item>
                ))}
              </Menu>
            </Navbar.ActionsSlot>
            <Navbar.ActionsSlot>
              <DonationLink href={donationPath}/>
            </Navbar.ActionsSlot>
          </Navbar.Slot>
        </Navbar>
      </div>
      <div className={cx('content')}>
        <h1 className={cx('title')}>
          {title}
        </h1>
        <div className={cx('actions')}>
          <Button
            className={cx('action')}
            upperCase
            size="l"
            border="full"
            icon={(
              <Icon
                glyph="arrow-right"
                width="100%"
                height="100%"
              />
            )}
            iconPosition="right"
            href={actionUrl}
          >
            {actionText}
          </Button>
        </div>
      </div>
    </div>
  );
};
