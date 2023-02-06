import classNames from 'classnames/bind';

import { InfoLink } from 'components/ui/info-link';

import type { Author } from 'core/author';

import styles from './alphabetical-author-list.module.css';

const cx = classNames.bind(styles);

interface AlphabeticalAuthorListProps {
  items: Author[]
}

export const AlphabeticalAuthorList: React.VFC<AlphabeticalAuthorListProps> = (props) => {
  const { items } = props;
  const groupedItems = groupByAlphabet(items);

  return (
    <div className={cx('root')}>
      {Object.keys(groupedItems).map((letter) => (
        <section key={letter}>
          <h3 className={cx('letter')}>
            {letter}
          </h3>
          <ul className={cx('list')}>
            {groupedItems[letter].map((author) => (
              <li
                key={author.slug}
                className={cx('item')}
              >
                <InfoLink
                  href={`/${author.slug}`}
                  label={author.fullName}
                  size="l"
                >
                  {author.fullName}
                </InfoLink>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

function groupByAlphabet(authors: Author[]) {
  return authors.sort(compareAuthors).reduce((result, author) => {
    const leadingSymbol = author.fullName.trim()[0].toLowerCase();
    const group = /[а-я]/.test(leadingSymbol) ? leadingSymbol : '#';

    if (result[group]) {
      result[group].push(author);
    } else {
      result[group] = [author];
    }

    return result;
  }, {} as Record<string, Author[]>);
}

function compareAuthors(a: Author, b: Author) {
  if (a.fullName > b.fullName) {
    return 1;
  }

  if (a.fullName < b.fullName) {
    return -1;
  }

  return 0;
}
