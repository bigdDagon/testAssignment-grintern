import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import { Book } from "../../../types/types";
import BookCard from "../../../components/Card";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface SliderProps {
  bookLists: Book[];
  testId: string;
}

const Slider: React.FC<SliderProps> = ({ bookLists, testId }) => {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="custom_swiper"
      breakpoints={{
        1200: {
          slidesPerView: 4.5,
          spaceBetween: 24,
          navigation: true,
        },
        800: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        400: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
      }}
    >
      {bookLists.map((book) => (
        <SwiperSlide key={book.id}>
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            authors={book.authors}
            imgUrl={book.formats["image/jpeg"]}
            testId={testId}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
