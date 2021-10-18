import {FC} from 'react';

import styles from './afishe-festival-day.module.css';
import {EventCard} from '../event-card';

export const FestivalDay: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <p className={styles.date}><span className={styles.span}>15</span>&nbsp;декабря</p>
        <p className={styles.registration}>открыта регистрация</p>
      </div>
      <EventCard time='13:00' location='Площадка «8/3»' title='Камино норте'
        image='https://source.unsplash.com/random'
        description='(Не)деликатная пьеса о психоневрологическом интернате' director='Катя Ганюшина'
        playwright='Ольга Казакова'
        registrationUrl='#'/>
      <EventCard time='14:00' location='Площадка «8/3»' title='Что я узнал о творчестве благодаря драматургам'
        description='Гости расскажут о своём творческом и организационном опыте и вдохновят аудиторию преодолевать любые границы.'
        playwright='Антон Чехов'
        registrationUrl='#'/>
      <EventCard time='17:00' location='Площадка «8/3»' title='Ответ на пощёчину'
        description='(Не)деликатная пьеса о психоневрологическом интернате'
        director='Катя Ганюшина'
        playwright='Ольга Казакова'
        registrationUrl='#'/>
      <EventCard time='19:00' location='Площадка «8/3»' title='МАМА'
        description='(Не)деликатная пьеса о психоневрологическом интернате'
        director='Катя Ганюшина'
        playwright='Ольга Казакова'
        registrationUrl='#'/>
    </section>
  );
};
