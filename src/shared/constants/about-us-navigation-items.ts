type TAboutUsNavigationItems = {
  id: string
  text: string
  href: string
  show?: boolean
}

export const aboutUsNavigationItems: TAboutUsNavigationItems[] = [
  {
    id: 'about-us',
    text: 'Что мы делаем',
    href: '/about-us',
  },
  {
    id: 'team',
    text: 'Организаторы',
    href: '/about-us/team',
  },
  {
    id: 'sponsors',
    text: 'Попечители',
    href: '/about-us/sponsors',
  },
  {
    id: 'mission',
    text: 'Миссия',
    href: '/about-us/mission',
  }
];
