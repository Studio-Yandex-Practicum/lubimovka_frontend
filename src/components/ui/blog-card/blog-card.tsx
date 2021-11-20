import React, { FC } from 'react';
import styles from './blog-card.module.css';
import Link from 'next/link';

import cn from 'classnames';

export interface BlogCardProps {
  image: string;
  author: string;
  heading: string;
  description: string;
  link: string;
  firstCardSizeMode?: 'regular' | 'big';
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const { image, author, heading, description, link, firstCardSizeMode = 'regular' } = props;

  return (
    <Link href={link}>
      <a className={cn(styles.cardLinkWrapper, styles[firstCardSizeMode])}>
        <li className={styles.card}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={image} alt={`изображение статьи: ${heading}`} />
          </div>
          <div className={styles.content}>
            <p className={styles.author}>{author}</p>
            <h6 className={styles.heading}>{heading}</h6>
            <p className={styles.description}>{description}</p>
          </div>
        </li>
      </a>
    </Link>
  );
};

