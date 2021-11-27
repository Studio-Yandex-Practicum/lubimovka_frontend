import { FC } from 'react';

import TextSection from 'components/ideology-section';
import { AboutUsMenu } from 'components/what-we-do-page/about-us-menu';
import { ITextSectionData } from 'components/ideology-section/ideology-section';

import style from './index.module.css';

interface IIdeologyPageProps {
  data: Array<ITextSectionData>;
}

const IdeologyPage: FC<IIdeologyPageProps> = ({ data }) => {
  return (
    <main className={style.content}>
      <div className={style.menu}>
        <AboutUsMenu/>
      </div>
      {data.map((el) => (
        <TextSection key={el.id} data={el}/>
      ))}
    </main>
  );
};

export default IdeologyPage;
