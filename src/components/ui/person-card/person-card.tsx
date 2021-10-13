import React from 'react';

import cn from 'classnames/bind';

import styles from './person-card.module.css';
import { Icon } from '../icon';

const cx = cn.bind(styles);

export interface IPersonCardProps {
  participant: boolean,
  name: string,
  link: string,
  about?: string,
  response?: string,
}

export const PersonCard: React.FC<IPersonCardProps> = (props) => {
  const {
    name,
    link,
    about,
    participant,
    response,
  } = props;

  return (
    <div className={cx('container', {containerParticipant: participant, containerVolunteer: !participant})}>
      <img className={cx({imgParticipant:participant, imgVolunteer: !participant})} src={link} alt={name}/>
      {!participant && response &&
      <button className={styles.comment}>
        <Icon glyph={'comment'}/>
      </button>}

      <h6 className={cx('name', {nameParticipant: participant, nameVolunteer: !participant})} title={name}>{name}</h6>

      {participant && about &&
      <p className={styles.about} title={about}>{about}</p>}
    </div>
  );
};

export default PersonCard;
