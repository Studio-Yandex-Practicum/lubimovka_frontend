import React, { FC } from 'react';
import styles from './blog-card.module.css';

interface BlogCardProps {
  image: string;
  author: string;
  heading: string;
  description: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const { image, author, heading, description, onClick } = props;

  return (
    <li className={styles.card} onClick={onClick}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt={`изображение статьи: ${heading}`} />
      </div>
      <div className={styles.content}>
        <p className={styles.author}>{author}</p>
        <h6 className={styles.heading}>{heading}</h6>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

