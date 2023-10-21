type TFooterNavigationItems = {
  text: string
  href: string
  show?: boolean
}

export const footerNavigationItems: TFooterNavigationItems[] = [
  {
    text: 'Любимовка',
    href: '/',
  },
  {
    text: 'Афиша',
    href: '/schedule',
  },
  {
    text: 'Библиотека',
    href: '/library',
  },
  {
    text: 'Блог',
    href: '/blog',
  },
  {
    text: 'Новости',
    href: '/news',
  },
  {
    text: 'О фестивале',
    href: '/about-us',
  },
  {
    text: 'Организаторы',
    href: '/about-us/team',
  },
  {
    text: 'История',
    href: '/history',
  },
  {
    text: 'Контакты',
    href: '/contacts',
  },
  {
    text: 'Для прессы',
    href: '/press-releases',
  },
];
