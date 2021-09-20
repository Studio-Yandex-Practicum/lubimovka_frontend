import { FC } from 'react';
import styles from './blog-card.module.css';

interface BlogCardProps {
  image: string;
  author: string;
  heading: string;
  description: string;
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const { image, author, heading, description } = props;

  return (
    <li className={styles.card}>
      <div className={styles.img_container}>
        <img className={styles.img} src={image} alt="изображение пьесы" />
      </div>
      <div>
        <p>{author}</p>
        <h6>{heading}</h6>
        <p>{description}</p>
      </div>
    </li>
  );
};

