import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

import { Container } from './styles';

export function Section({ title, cards }) {
  const settings = {
    modules: [Navigation],
    navigation: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    breakpoints: {
      769: {
        spaceBetween: 27,
        // grabCursor: true,
      },
    },
  };
  return (
    <Container>
      <h2>{title}</h2>

      <Swiper
        {...settings}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={String(index)}>{card}</SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
