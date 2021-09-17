import React from 'react';

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
  } = props;

  const mode = participant ? 'participant' : 'volunteer';

  return (
    <div>
      <div>
        <img src={link} alt={name}/>
      </div>
      {/*заменить h6 на Headline,
            у карточек волонтера заголовок h7 на десктопе и h6 в мобилке,
            у участников везде h6*/}
      <h6>{name}</h6>

      {mode === 'participant' && about &&
      <p>{about}</p>}
    </div>
  );
};

export default PersonCard;
