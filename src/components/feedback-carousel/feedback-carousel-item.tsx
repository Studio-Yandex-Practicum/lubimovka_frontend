export const FeedbackCarouselItem: React.FC = (props) => {
  const { children } = props;

  return (
    <div className="keen-slider__slide">
      {children}
    </div>
  );
};

