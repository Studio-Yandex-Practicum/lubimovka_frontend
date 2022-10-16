import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';

import styles from './blog-card.module.css';

export interface BlogCardProps {
  image: string;
  author: string;
  heading: string;
  description: string;
  id: number;
  firstCardSizeMode?: 'regular' | 'big';
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const { image, author, heading, description, id, firstCardSizeMode = 'regular' } = props;

  const link = `/blog/${encodeURIComponent(id)}`;

  const [imgWidth, setImgWidth] = React.useState<number>();
  const [imgHeight, setImgHeight] = React.useState<number>();

  const handleImageLoad = (e: { naturalWidth: number, naturalHeight: number }) => {
    setImgWidth(e.naturalWidth);
    setImgHeight(e.naturalHeight);
  };

  return (
    <Link href={link}>
      <a className={cn(styles.cardLinkWrapper, styles[firstCardSizeMode])}>
        <article className={styles.card}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={image}
              alt={`изображение статьи: ${heading}`}
              width={imgWidth || 100}
              height={imgHeight || 100}
              layout="responsive"
              objectFit="cover"
              priority
              onLoadingComplete={handleImageLoad}
              unoptimized={process.env.STORYBOOK ? true: false}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.author}>
              {author}
            </p>
            <h6 className={styles.heading}>
              {heading}
            </h6>
            <p className={styles.description}>
              {description}
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
};
