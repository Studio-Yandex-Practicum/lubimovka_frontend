import { INavigationMenuItemProps } from '../components/ui/navigation-menu-item';
import { TSocialItem } from 'components/common/navbar';

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

export const SOCIAL_LIST_ITEMS: TSocialItem[] = [
  {
    title: 'fb',
    href: '#'
  },
  {
    title: 'inst',
    href: '#'
  },
  {
    title: 'ytube',
    href: '#'
  },
  {
    title: 'tlgrm',
    href: '#'
  },
  {
    title: 'vk',
    href: '#'
  },
];

