import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import type { FC } from 'react';

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

  const [imgWidth, setImgWidth] = useState<number>();
  const [imgHeight, setImgHeight] = useState<number>();

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
