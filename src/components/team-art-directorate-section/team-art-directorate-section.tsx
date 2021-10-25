import React, { FC } from 'react';

import ArtDirectorateList from 'components/team-art-directorate-list';
import styles from './team-art-directorate-section.module.css';

interface PersonCardData {
  id: number,
  name: string,
  link: string,
  about: string
}

interface ArtDirectorateSectionProps {
  data: {
    id: number
    title: string
    content: Array<PersonCardData>
  }
}

const ArtDirectorateSection: FC<ArtDirectorateSectionProps> = ({ data }) => {
  const { title, content } = data;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <ArtDirectorateList cards={content}/>
      </div>
    </section>
  );
};

export default ArtDirectorateSection;
