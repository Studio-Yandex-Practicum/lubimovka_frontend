import { FC } from 'react';

import style from './history-itself.module.css';

interface TextItemData {
  text: string
}
interface ImageItemData {
  image: string
}
interface IHistoryItself {
  data: {
    historyContent: Array<TextItemData>,
    images: Array<ImageItemData>
  }
}
const HistoryItself: FC<IHistoryItself>= ({ data }) => {
  const { historyContent, images } = data;
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <img src={images[0].image} alt="изображение" className={style.image_title}/>
        <div className={style.title_flex}>
          <h1 className={style.title}>История фестиваля</h1>
          <p className={style.text}>{historyContent[0].text}</p>
        </div>
      </div>
      <p className={style.text1}>{historyContent[1].text}</p>
      <p className={style.text2}>{historyContent[2].text}</p>
      <div className={style.flex1}>
        <img src={images[1].image} alt="изображение" className={style.image}/>
        <img src={images[2].image} alt="изображение" className={style.image}/>
      </div>
      <p className={style.text3}>{historyContent[3].text}</p>
    </section>
  );
};
export default HistoryItself;
