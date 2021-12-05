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

  return (
    <Link href={link}>
      <a className={cn(styles.cardLinkWrapper, styles[firstCardSizeMode])}>
        <article className={styles.card}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={image}
              alt={`изображение статьи: ${heading}`}
              width='100%'
              height='100%'
              layout='responsive'
              objectFit='cover'
              priority
            />
          </div>
          <div className={styles.content}>
            <p className={styles.author}>{author}</p>
            <h6 className={styles.heading}>{heading}</h6>
            <p className={styles.description}>{description}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

