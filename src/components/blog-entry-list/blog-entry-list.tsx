import { ReactNode, useRef, useEffect, useState, Children } from 'react';
import classNames from 'classnames/bind';

import { BlogEntryListItem } from './item';
import { useDidMountEffect } from 'shared/hooks/use-did-mount-effect';
import { useIntersection } from 'shared/hooks/use-intersection';

import styles from './blog-entry-list.module.css';
import blogEntryListVars from './blog-entry-list.vars.module.css';

interface IBlogEntryListProps {
  children: ReactNode
  hasMoreEntries: boolean
  onShouldLoadEntries: () => void
}

const cx = classNames.bind(styles);

const columnCount = parseInt(blogEntryListVars['column-count-tablet-portrait'], 10);
const firstItemColumnSpan = parseInt(blogEntryListVars['first-item-column-span-tablet-portrait'], 10);
const previousColumnIndexOffset = firstItemColumnSpan - 1;

export const BlogEntryList = (props: IBlogEntryListProps) => {
  const {
    children,
    hasMoreEntries,
    onShouldLoadEntries,
  } = props;
  const containerRef = useRef<HTMLUListElement>(null);
  const lastEntryRef = useRef<HTMLSpanElement>(null);
  const shouldLoadEntries = useIntersection(lastEntryRef, { threshold: .85 });
  const [loading, setLoading] = useState(false);

  const layout = () => {
    // https://css-tricks.com/a-lightweight-masonry-solution/

    const elements = Array.from(containerRef.current!.children as HTMLCollectionOf<HTMLElement>);

    elements.slice(columnCount - previousColumnIndexOffset).forEach((element, index) => {
      const previousElementIndex = index - previousColumnIndexOffset;
      const previousElementBottom = elements[previousElementIndex > 0 ? previousElementIndex : 0].getBoundingClientRect().bottom;
      const currentElementTop = element.getBoundingClientRect().top;

      element.style.marginTop = `${previousElementBottom + 60 - currentElementTop}px`;
    });

    setLoading(false);
  };

  useEffect(() => {
    if (!containerRef.current || getComputedStyle(containerRef.current).gridTemplateRows === 'masonry') return;

    window.addEventListener('load', layout);
  });

  useDidMountEffect(() => {
    layout();
  }, [Children.count(children)]);

  useEffect(() => {
    if (!loading && shouldLoadEntries && hasMoreEntries) {
      setLoading(true);
      onShouldLoadEntries();
    }
  }, [hasMoreEntries, shouldLoadEntries, loading, onShouldLoadEntries]);

  return (
    <ul
      className={cx('root')}
      ref={containerRef}
    >
      {children}
      <span ref={lastEntryRef}/>
    </ul>
  );
};

BlogEntryList.Item = BlogEntryListItem;
