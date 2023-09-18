import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import type { BlogEntryPreview } from 'core/blog';

import styles from './blog-entry-card.module.css';
import { AppContext } from 'components/app-context/app-context';

const cx = classNames.bind(styles);

interface BlogEntryCardProps extends Omit<BlogEntryPreview, 'id'> {
  viewUrl: Url
}

export const BlogEntryCard: React.VFC<BlogEntryCardProps> = (props) => {

  const {someData, setSomeData} = useContext(AppContext);

  const {
    authorFullName,
    authorUrl,
    title,
    description,
    image,
    viewUrl,
  } = props;

  const AuthorNameTag = authorUrl ? 'a' : 'address';
  const authorNameProps = authorUrl ? { href: authorUrl } : {};

  return (
    <article className={cx('root')} onClick={()=>setSomeData(viewUrl)} id={viewUrl}>
      <Link href={viewUrl}>
        <a className={cx('link')}>
          <h2 className={cx('title')}>
            {title}
          </h2>
        </a>
      </Link>
      <AuthorNameTag
        className={cx('author')}
        {...authorNameProps}
      >
        {authorFullName}
      </AuthorNameTag>
      <p className={cx('description')}>
        {description}
      </p>
      {image && (
        <div className={cx('image-holder')}>
          <Image
            className={cx('image')}
            src={image}
            alt=""
            layout="fill"
            objectFit="cover"
            sizes="320px"
          />
        </div>
      )}
    </article>
  );
};
