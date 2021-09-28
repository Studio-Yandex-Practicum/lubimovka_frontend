import { FC } from 'react';
import { Button } from 'components/ui/button/button';
import styles from './event-card.module.css';
interface IEventCardProps {
  image?: string;
  time: string;
  location: string;
  title: string;
  description: string;
  playwright: string;
  direct: string;
}
export const EventСard: FC<IEventCardProps> = (props) => {
  const { time, location, title, description, playwright, direct, image } = props;
  return (
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        {image && (
          <img src={image} alt={title} className={styles.image} />
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
      <div className={styles.buttonBox}>
        <Button
          className={styles.button}
          size="s"
          iconPlace="left"
          icon="arrow-right"
          label="Регистрация"
          border="bottomLeft"
          view="primary"
        ></Button>
      </div>

    </div>
  );
};
