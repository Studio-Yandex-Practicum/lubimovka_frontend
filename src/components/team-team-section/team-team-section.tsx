import React, { FC } from 'react';
import TrusteesPersons from 'components/trustees-persons-list';

import styles from './team-team-section.module.css';

interface PersonCardData {
  id: number,
  name: string,
  link: string,
  about: string
}

interface TeamSectionProps {
  data: {
    id: number
    title: string
    content: Array<PersonCardData>
  }
}

const TeamSection: FC<TeamSectionProps> = ({ data }) => {
  const { title, content } = data;
  console.log(content);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <TrusteesPersons trustees={content} />
      </div>
    </section>
  );
};

export default TeamSection;
