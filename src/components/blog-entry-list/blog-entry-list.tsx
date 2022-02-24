import { ReactNode, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';

import { BlogEntryListItem } from './item';

import styles from './blog-entry-list.module.css';
import blogEntryListVars from './blog-entry-list.vars.module.css';

interface IBlogEntryListProps {
  children: ReactNode
}

const cx = classNames.bind(styles);

const columnCount = parseInt(blogEntryListVars['column-count-tablet-portrait'], 10);
const firstItemColumnSpan = parseInt(blogEntryListVars['first-item-column-span-tablet-portrait'], 10);
const previousColumnIndexOffset = firstItemColumnSpan - 1;

export const BlogEntryList = (props: IBlogEntryListProps): JSX.Element => {
  const { children } = props;
  const containerRef = useRef<HTMLUListElement>(null);

  const layout = () => {
    // https://css-tricks.com/a-lightweight-masonry-solution/

    const elements = Array.from(containerRef.current!.children as HTMLCollectionOf<HTMLElement>);

    elements.slice(columnCount - previousColumnIndexOffset).forEach((element, index) => {
      const previousElementIndex = index - previousColumnIndexOffset;
      const previousElementBottom = elements[previousElementIndex > 0 ? previousElementIndex : 0].getBoundingClientRect().bottom;
      const currentElementTop = element.getBoundingClientRect().top;

      element.style.marginTop = `${previousElementBottom + 60 - currentElementTop}px`;
    });
  };

  useEffect(() => {
    if (!containerRef.current || getComputedStyle(containerRef.current).gridTemplateRows === 'masonry') return;

    window.addEventListener('load', layout);
  }, []);

  return (
    <ul
      className={cx('root')}
      ref={containerRef}
    >
      {children}
    </ul>
  );
};

BlogEntryList.Item = BlogEntryListItem;
