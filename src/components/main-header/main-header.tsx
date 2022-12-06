import classNames from 'classnames/bind';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Navbar } from 'components/navbar';
import { Menu } from 'components/ui/menu';
import { Logotype } from 'components/logotype';
import { DonationLink } from 'components/donation-link';
import { Button } from 'components/ui/button2';
import { Icon } from 'components/ui/icon';
import { useIntersectionObserver } from 'shared/hooks/use-intersection-observer';
import { mainNavigationItems } from 'shared/constants/main-navigation-items';
import { socialLinkItems } from 'shared/constants/social-link-items';
import { donationPath } from 'shared/constants/donation-path';

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
  const [containerElRef, isContainerElInViewport] = useIntersectionObserver({ threshold: .1 });

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
        />
      </div>
      <div
        className={cx(
          'navbar',
          { pinned: !isContainerElInViewport }
        )}
      >
        <Navbar view={isContainerElInViewport ? 'expanded' : 'regular'}>
          <Navbar.Logotype>
            <Logotype
              href="/"
              title="Фестиваль Любимовка"
              full={isContainerElInViewport}
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
            target="_blank"
          >
            {actionText}
          </Button>
        </div>
      </div>
    </div>
  );
};
