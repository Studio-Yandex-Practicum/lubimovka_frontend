import { FC } from 'react';

import style from './history-itself.module.css';

interface TextItemData {
  text1: string,
  text2: string,
  text3: string,
  text4: string
}
interface ImageItemData {
  imageUrl1: string,
  imageUrl2: string,
  imageUrl3: string
}
interface IHistoryItself {
  data: {
    historyContent:  TextItemData,
    historyImages: ImageItemData
  }
}
export const HistoryItself: FC<IHistoryItself>= ({ data }) => {
  const { historyContent, historyImages } = data;
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <img src={historyImages.imageUrl1} alt="изображение" className={style.image_title}/>
        <div className={style.title_flex}>
          <h1 className={style.title}>История фестиваля</h1>
          <p className={style.text}>{historyContent.text1}</p>
        </div>
      </div>
      <p className={style.text1}>{historyContent.text2}</p>
      <p className={style.text2}>{historyContent.text3}</p>
      <div className={style.flex1}>
        <img src={historyImages.imageUrl2} alt="изображение" className={style.image}/>
        <img src={historyImages.imageUrl3} alt="изображение" className={style.image}/>
      </div>
      <p className={style.text3}>{historyContent.text4}</p>
    </section>
  );
};

