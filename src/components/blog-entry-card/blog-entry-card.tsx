import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import type { BlogEntryPreview } from 'core/blog';
import type { ImageProps } from 'next/image';

import styles from './blog-entry-card.module.css';

const cx = classNames.bind(styles);

interface BlogEntryCardProps extends Omit<BlogEntryPreview, 'id'> {
  viewUrl: Url
}

export const BlogEntryCard: React.VFC<BlogEntryCardProps> = (props) => {
  const {
    authorFullName,
    authorUrl,
    title,
    description,
    image,
    viewUrl,
  } = props;

  const [imageWidth, setImageWidth] = useState(270);
  const [imageHeight, setImageHeight] = useState(0);

  const AuthorNameTag = authorUrl ? 'a' : 'address';
  const authorNameProps = authorUrl ? { href: authorUrl } : {};

  const handleLoadingComplete: ImageProps['onLoadingComplete'] = ({ naturalWidth, naturalHeight }) => {
    const scale = imageWidth / naturalWidth;

    setImageWidth(naturalWidth * scale);
    setImageHeight(naturalHeight * scale);
  };

  return (
    <article className={cx('root')}>
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
            width={imageWidth}
            height={imageHeight}
            onLoadingComplete={handleLoadingComplete}
          />
        </div>
      )}
    </article>
  );
};
