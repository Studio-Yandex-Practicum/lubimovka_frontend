import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';

type ChildrenProps = {
  currentItemIndex: number
} & ({
  loaded: true
  handleCurrentItemChange: (index: number) => void
  handleForward: () => void
  handleBackward: () => void
} | {
  loaded: false
  handleCurrentItemChange?: never
  handleForward?: never
  handleBackward?: never
})

interface FeedbackCarouselProps {
  className?: string
  initialItemIndex?: number
  children: (childrenProps: ChildrenProps) => void
}

export const FeedbackCarousel = (props: FeedbackCarouselProps) => {
  const {
    className = '',
    initialItemIndex = 0,
    children,
  } = props;

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      spacing: 15,
    },
    initial: initialItemIndex,
    created() {
      setLoaded(true);
    },
    slideChanged(s) {
      setCurrentSlideIndex(s.track.details.rel);
    },
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      instanceRef.current?.prev();

      return;
    }

    if (event.key === 'ArrowRight') {
      instanceRef.current?.next();

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
          ...loaded && !!instanceRef.current ? {
            loaded: true,
            handleCurrentItemChange: instanceRef.current?.moveToIdx,
            handleForward: instanceRef.current?.next,
            handleBackward: instanceRef.current?.prev,
          } : {
            loaded: false,
          },
          currentItemIndex: currentSlideIndex,
        })}
      </div>
    </div>
  );
};
