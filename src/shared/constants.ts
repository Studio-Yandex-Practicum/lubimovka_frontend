import { INavigationMenuItemProps } from '../components/ui/navigation-menu-item';

export const NAVIGATION_MENU_ITEMS: INavigationMenuItemProps[] = [
  {
    title: 'Афиша',
    href: '/afishe',
  },
  {
    title: 'Библиотека',
    href: '/library',
  },
  {
    title: 'Проекты',
    href: '/projects',
  },
  {
    title: 'История',
    href: '/history',
  },
  {
    title: 'Блог',
    href: '/blog',
  },
  {
    title: 'Новости',
    href: '/news',
  },
  {
    title: 'О фестивале',
    href: '/what-we-do',
  },
  {
    title: 'Контакты',
    href: '/contacts',
  },
];

export const LIBRARY_TABS = [
  {
    title: 'Пьесы',
    href: '#',
    active: true,
  },
  {
    title: 'Авторы',
    href: '#',
    inactive: true,
  },
];

