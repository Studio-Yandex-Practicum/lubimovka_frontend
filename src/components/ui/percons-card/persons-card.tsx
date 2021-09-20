import React from 'react';

import cn from 'classnames';

import styles from './persons-card.module.css';
import {Icon} from '../icon';

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

  const mode = participant ? 'Participant' : 'Volunteer';

  return (
    <div className={cn(styles.container, styles[`container${mode}`])}>
      <img className={cn(styles[`img${mode}`])} src={link} alt={name}/>
      {mode === 'Volunteer' && response &&
      <button className={styles.comment}>
        <Icon glyph={'comment'}/>
      </button>}

      {/*заменить h6 на Headline,
            у карточек волонтера заголовок h7 на десктопе и h6 в мобилке,
            у участников везде h6*/}
      <h6 className={styles.name} title={name}>{name}</h6>
      {/*заменить p на body-text*/}
      {mode === 'Participant' && about &&
      <p className={styles.about} title={about}>{about}</p>}
    </div>
  );
};

export default PersonCard;
