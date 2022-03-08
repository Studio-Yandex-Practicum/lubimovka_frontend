import {
  ReactNode,
  useState,
  useRef,
  useEffect,
  Children,
  cloneElement,
  isValidElement
} from 'react';
import classNames from 'classnames/bind';

import { NewsListItem } from './item';
import { useIntersection } from 'shared/hooks/use-intersection';

import styles from './news-list.module.css';

interface NewsListProps {
  children: ReactNode | ReactNode[]
  className?: string
  hasMoreEntries: boolean
  onShouldLoadEntries: () => void
}

const cx = classNames.bind(styles);

const Component = (props: NewsListProps) => {
  const {
    children,
    className,
    hasMoreEntries,
    onShouldLoadEntries,
  } = props;
  const lastItemRef = useRef<HTMLElement>(null);
  const shouldLoadEntries = useIntersection(lastItemRef, { threshold: .85 });
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!pending && shouldLoadEntries && hasMoreEntries) {
      setPending(true);
      onShouldLoadEntries();
      setPending(false);
    }
  }, [hasMoreEntries, shouldLoadEntries, pending, onShouldLoadEntries]);

  const lastChildIndex = Children.count(children) - 1;

  return (
    <ul className={cx('root', className)}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child) && index === lastChildIndex) {
          return cloneElement(child, { ref: lastItemRef });
        } else {
          return child;
        };
      })}
    </ul>
  );
};

export const NewsList = Object.assign(Component, {
  Item: NewsListItem,
});
