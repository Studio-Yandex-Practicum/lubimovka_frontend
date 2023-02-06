import classNames from 'classnames/bind';
import {
  Children,
  cloneElement,
  isValidElement,
  useLayoutEffect,
  useState,
} from 'react';

import breakpoints from 'shared/breakpoints.js';
import { useMediaQuery } from 'shared/hooks/use-media-query';

import { BlogEntryListItem } from './item';

import type { ReactNode } from 'react';

import styles from './blog-entry-list.module.css';
import blogEntryListVars from './blog-entry-list.vars.module.css';

interface BlogEntryListProps {
  children: ReactNode | ReactNode[]
}

const cx = classNames.bind(styles);

const columnCount = parseInt(blogEntryListVars['column-count-tablet-portrait'], 10);

export const BlogEntryList = (props: BlogEntryListProps) => {
  const {
    children,
  } = props;
  const [columns, setColumns] = useState<ReactNode[][]>([]);

  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  useLayoutEffect(() => {
    if (isMobile) {
      return;
    }

    const columns: ReactNode[][] = Array.from(
      { length: columnCount },
      () => [],
    );

    Children.forEach(children, (child, index) => {
      if (!isValidElement(child)) {
        return;
      }

      const clonedElement = cloneElement(child, {
        ...child.props,
        key: index,
      });

      columns[index % columnCount].push(clonedElement);
    });

    setColumns(columns);
  }, [children, isMobile]);

  return (
    <ul className={cx('root')}>
      {isMobile
        ? children
        : columns.map((column, index) => (
          <div
            key={index}
            className={cx('column')}
          >
            {column}
          </div>
        ))}
    </ul>
  );
};

BlogEntryList.Item = BlogEntryListItem;
