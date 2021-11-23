export interface INavbar {
  id: number
  text: string
  href: string
}

export const navbarNavigationItems = [
  {
    id: 1,
    text: 'Что мы делаем',
    href: '/what-we-do'
  },
  {
    id: 2,
    text: 'Организаторы',
    href: '/team'
  },
  {
    id: 3,
    text: 'Попечители',
    href: '/trustees'
  },
  {
    id: 4,
    text: 'Идеология',
    href: '/ideology'
  }
];
