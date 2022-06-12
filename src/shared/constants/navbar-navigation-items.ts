// TODO: тут что-то не так с неймингом, navbarNavigationItems на самом деле содержит элементы навигации раздела «О фестивале», нужно исправить

export interface INavbar { // TODO: не оч понятно, зачем нужен этот интерфейс
  id: number
  text: string
  href: string
}

export const navbarNavigationItems = [
  {
    id: 1,
    text: 'Что мы делаем',
    href: '/about-us'
  },
  {
    id: 2,
    text: 'Организаторы',
    href: '/about-us/team'
  },
  {
    id: 3,
    text: 'Попечители',
    href: '/about-us/trustees'
  },
  {
    id: 4,
    text: 'Идеология',
    href: '/about-us/ideology'
  }
];
