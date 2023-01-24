import { ImageCarousel as Component } from './image-carousel';
import { ImageCarouselSlide } from './image-carousel-slide';

export const ImageCarousel = Object.assign(Component, {
  Slide: ImageCarouselSlide,
});
