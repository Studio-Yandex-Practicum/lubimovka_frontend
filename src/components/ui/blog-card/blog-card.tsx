import React, { FC } from 'react';
import styles from './blog-card.module.css';
import Link from 'next/link';

interface BlogCardProps {
  image: string;
  author: string;
  heading: string;
  description: string;
  link: string;
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const { image, author, heading, description, link } = props;

  return (
    <li className={styles.card}>
      <div className={styles.imgContainer}>
        <Link href={link}>
          <a>
            <img className={styles.img} src={image} alt={`изображение статьи: ${heading}`} />
          </a>
        </Link>
      </div>
      <div className={styles.content}>
        <p className={styles.author}>{author}</p>
        <Link href={link}>
          <a>
            <h6 className={styles.heading}>{heading}</h6>
          </a>
        </Link>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

