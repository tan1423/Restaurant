import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const images = [
  'https://image.slidesharecdn.com/waflsunil-230324111058-dd6f4829/75/Food-photography-swiggy-zomato-Milton-photo-5-2048.jpg',  
  'https://b.zmtcdn.com/data/pictures/5/18808035/c9677661058854b4d41bfab5dbddd6ac.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
  'https://image.slidesharecdn.com/waflsunil-230324111058-dd6f4829/75/Food-photography-swiggy-zomato-Milton-photo-3-2048.jpg',
  'https://image.slidesharecdn.com/waflsunil-230324111058-dd6f4829/75/Food-photography-swiggy-zomato-Milton-photo-7-2048.jpg',
  'https://img.freepik.com/free-photo/top-view-delicious-kebab-with-other-dishes-copy-space_23-2148685494.jpg?w=740&t=st=1716360470~exp=1716361070~hmac=5b8b1c837ebceaa66a2eecaa1b7f48a4403d3ee03c497b40e6e6ac446a72c5fa',
];

export default function App() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="bg-cover bg-center h-[30rem] w-5/6 max-xl:h-[25rem] max-xl:w-4/6 max-lg:h-[20rem] max-lg:w-4/6 max-md:h-[15rem] max-md:w-5/6 max-sm:h-[10rem] max-sm:w-full m-auto flex items-center justify-center rounded-xl mt-4 shadow-lg overflow-hidden" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
