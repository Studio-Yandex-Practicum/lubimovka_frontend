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
    content: Array<TextItemData>,
    images: Array<ImageItemData>
  }
}
const HistoryItself: FC<IHistoryItself>= ({ data }) => {
  const { content, images } = data;
  return (
    <section className={style.section}>
      <div className={style.flex}>
        <img src={images[0].image} alt="изображение" className={style.image_title}/>
        <div className={style.title_flex}>
          <h1 className={style.title}>История фестиваля</h1>
          <p className={style.text}>{content[0].text}</p>
        </div>
      </div>
    </section>
  );
};
export default HistoryItself;
