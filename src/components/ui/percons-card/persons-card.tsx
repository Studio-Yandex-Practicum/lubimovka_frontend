import React from 'react';

import cn from 'classnames/bind';

import styles from './persons-card.module.css';
import {Icon} from '../icon';

const cx = cn.bind(styles);

interface IPersonCardProps {
  participant: boolean,
  name: string,
  link: string,
  about?: string,
  response?: string,
}

const PersonCard: React.FC<IPersonCardProps> = (props) => {
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

      {/*заменить h6 на Headline,
            у карточек волонтера заголовок h7 на десктопе и h6 в мобилке,
            у участников везде h6*/}
      <h6 className={styles.name} title={name}>{name}</h6>
      {/*заменить p на body-text*/}
      {participant && about &&
      <p className={styles.about} title={about}>{about}</p>}
    </div>
  );
};

export default PersonCard;
