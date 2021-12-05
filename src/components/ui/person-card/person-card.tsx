import React from 'react';
import cn from 'classnames/bind';
import Image from 'next/image';

import { Icon } from '../icon';

import styles from './person-card.module.css';
import Logo from 'shared/images/compact-logo.svg';

const cx = cn.bind(styles);

export interface IPersonCardProps {
  participant?: boolean,
  name: string,
  image?: string,
  about?: string,
  response?: string,
  handleClick?: React.MouseEventHandler<HTMLButtonElement>,
}

export const PersonCard: React.FC<IPersonCardProps> = (props) => {
  const {
    name,
    image,
    about,
    participant,
    response,
    handleClick,
  } = props;

  return (
    <div className={cx('container', { containerParticipant: participant, containerVolunteer: !participant })}>
      <div className={cx({ imgParticipant:participant, imgVolunteer: !participant, defaultImage:!image })}>
        {image ?
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
          /> :
          <Logo className={cx('logo')}/>
        }

      </div>

      {!participant && response &&
      <button className={styles.comment} onClick={handleClick}>
        <Icon glyph={'comment'} width='100%' height='100%'/>
      </button>}

      <h6 className={cx('name', { nameParticipant: participant, nameVolunteer: !participant })} title={name}>{name}</h6>

      {participant && about &&
      <p className={styles.about} title={about}>{about}</p>}
    </div>
  );
};

export default PersonCard;
