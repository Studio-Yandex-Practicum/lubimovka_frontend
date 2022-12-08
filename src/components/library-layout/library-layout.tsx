import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

import { Menu } from 'components/ui/menu';
import LibraryForm from 'components/library-form';

import { LibraryLayoutSidebar } from './sidebar';
import { LibraryLayoutContent } from './content';
import { LibraryLayoutPagination } from './pagination';

import styles from './library-layout.module.css';

interface LibraryLayoutProps {
  variant: 'authors' | 'plays'
}

const libraryNavigationItems = [
  {
    text: 'Пьесы',
    href: '/library',
  },
  {
    text: 'Авторы',
    href: '/library/authors',
  }
];

const cx = classNames.bind(styles);

const Component: React.FC<LibraryLayoutProps> = (props) => {
  const {
    variant,
    children,
  } = props;

  const router = useRouter();

  return (
    <div className={cx(variant)}>
      <div className={cx('navigation')}>
        <Menu type="library-navigation">
          {libraryNavigationItems.map(({ text, href }) => (
            <Menu.Item
              key={href}
              current={router.pathname === href}
              href={href}
            >
              {text}
            </Menu.Item>
          ))}
        </Menu>
      </div>
      <div className={cx('heading')}>
        <h1 className={cx('title')}>
          Библиотека
        </h1>
      </div>
      <div className={cx('search')}>
        <LibraryForm/>
      </div>
      {children}
    </div>
  );
};

export const LibraryLayout = Object.assign(Component, {
  Sidebar: LibraryLayoutSidebar,
  Content: LibraryLayoutContent,
  Pagination: LibraryLayoutPagination,
});
