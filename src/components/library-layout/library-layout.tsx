import classNames from 'classnames/bind';

import { Menu } from 'components/ui/menu';
import LibraryForm from 'components/library-form';

import { LibraryLayoutSidebar } from './sidebar';
import { LibraryLayoutContent } from './content';
import { LibraryLayoutPagination } from './pagination';

import styles from './library-layout.module.css';

interface LibraryLayoutProps {
  variant: 'authors' | 'plays'
}

const cx = classNames.bind(styles);

const Component: React.FC<LibraryLayoutProps> = (props) => {
  const {
    variant,
    children,
  } = props;

  return (
    <div className={cx(variant)}>
      <div className={cx('navigation')}>
        <Menu type="library-navigation">
          <Menu.Item
            href="/library"
          >
            Пьесы
          </Menu.Item>
          <Menu.Item
            href="/library/authors"
            current
          >
            Авторы
          </Menu.Item>
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
