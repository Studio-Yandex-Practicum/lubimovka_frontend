import { FC } from 'react';
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

export type TImageItem = {
  image: string;
  caption: string;
}

interface IImageSliderProps {
  images: TImageItem[];
}

export const ImageSlider: FC<IImageSliderProps> = (props) => {
  const { images } = props;

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    spacing: 15,
  });

  return (
    <div ref={sliderRef} className='keen-slider'>
      {images.map((card, id) => (
        <img
          key={id}
          className='keen-slider__slide'
          src={card.image}
          alt={card.caption}
          draggable={false}
        />
      ))}
    </div>
  );
};
