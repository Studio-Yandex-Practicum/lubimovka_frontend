import classNames from 'classnames/bind';

import styles from './search-layout.module.css';

const cx = classNames.bind(styles);

enum Area {
  Breadcrumb = 'breadcrumb',
  Message = 'message',
  Search = 'search',
  Content = 'content',
  NotFoundNote = 'not-found-note',
}

interface SearchLayoutProps {
  area: `${Area}`
}

export const SearchLayoutSlot: React.FC<SearchLayoutProps> = (props) => {
  const {
    area,
    children,
  } = props;

  const Tag: React.ElementType = (area === Area.Message || area === Area.NotFoundNote)
    ? 'p' : 'div';

  return (
    <Tag className={cx(area)}>
      {children}
    </Tag>
  );
};
