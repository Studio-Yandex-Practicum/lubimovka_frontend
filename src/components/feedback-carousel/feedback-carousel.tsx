import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

import type KeenSlider from 'keen-slider';

interface FeedbackCarouselProps {
  className?: string;
  initialItemIndex?: number;
  children: (childrenProps: {
    totalItems: number
    currentItemIndex: number
    handleCurrentItemChange: KeenSlider['moveToSlideRelative'],
    handleForward: KeenSlider['next'],
    handleBackward: KeenSlider['prev'],
  }) => void;
}

export const FeedbackCarousel = (props: FeedbackCarouselProps) => {
  const {
    className = '',
    initialItemIndex = 0,
    children,
  } = props;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    spacing: 15,
    initial: initialItemIndex,
    slideChanged(s) {
      setCurrentSlideIndex(s.details().relativeSlide);
    },
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      slider.prev();

      return;
    }

    if (event.key === 'ArrowRight') {
      slider.next();

      return;
    }
  };

  return (
    <div
      className={className}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={sliderRef}
        className="keen-slider"
      >
        {children({
          totalItems: slider?.details().size,
          currentItemIndex: currentSlideIndex,
          handleCurrentItemChange: slider?.moveToSlideRelative,
          handleForward: slider?.next,
          handleBackward: slider?.prev,
        })}
      </div>
    </div>
  );
};
