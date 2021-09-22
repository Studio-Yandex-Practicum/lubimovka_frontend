import React, { FC } from 'react';
import styles from './blog-card.module.css';

interface BlogCardProps {
  image: string;
  author: string;
  heading: string;
  description: string;
  onClick?: (evt: React.MouseEvent) => React.MouseEvent;
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const { image, author, heading, description, onClick } = props;

  function handleCardClick(evt: React.MouseEvent) {
    onClick ? onClick(evt) : null;
  }

  return (
    <li className={styles.card} onClick={onClick && handleCardClick}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={image} alt="изображение пьесы" />
      </div>
      <div className={styles.content}>
        <p className={styles.author}>{author}</p>
        <h6 className={styles.heading}>{heading}</h6>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

