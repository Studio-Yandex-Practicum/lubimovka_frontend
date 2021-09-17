import { FC } from 'react';
import styles from './event-card.module.css';
interface ICardProps {
  img?: string;
  time: string;
  location: string;
  title: string;
  description: string;
  playwright: string;
  direct: string;
}
export const EventСard: FC<ICardProps> = (props) => {
  const { img, time, location, title, description, playwright, direct } = props;
  return (
    <>
      <div className={styles.event}>
        <div className={`${img ? styles.content : styles.contentNoImage}`}>
          {img && <img src={img} alt={title} className={styles.image} />}
          <div className={styles.data}>
            <p className={styles.time}>{time}</p>
            <p className={styles.location}>{location}</p>
          </div>
          <div className={styles.data}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
          <ul className={styles.creators}>
            <li>Драматург: {playwright}</li>
            <li>Режиссер: {direct}</li>
          </ul>
          <button className={styles.button}></button>
        </div>
      </div>
    </>
  );
};
