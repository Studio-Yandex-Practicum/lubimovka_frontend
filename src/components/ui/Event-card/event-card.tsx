import { FC } from 'react';
import styles from './event-card.module.css';
import { Button } from '../button/button';
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
  const { time, location, title, description, playwright, direct } = props;
  return (
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        {props.img && (
          <img src={props.img} alt={title} className={styles.image} />
        )}
      </div>
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
      <Button
        className={styles.button}
        size="s"
        iconPlace="left"
        icon="arrow-right"
        label="Регистрация"
        border="bottomLeft"
        view="transparent"
      ></Button>
    </div>
  );
};
