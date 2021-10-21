import { FC } from 'react';

import { Section } from 'components/section';
import styles from './main-title.module.css';

export interface IMainTitle {
  title: string,
  view: 'primary' | 'secondary';
  text?: string,
  buttonText: string;
  buttonLink: string;
}

export const MainTitle: FC<IMainTitle> = (params) => {
  const {title, view, text, buttonText, buttonLink} = params;
  return (
    <Section title={title} titleTag='h1' type="mainPageSecondary">
      <p>{text}</p>
    </Section>
  );
};
