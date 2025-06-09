import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Bestsellers = () => {
  const bestsellers = [
    { id: 1, title: "Beyond Good and Evil", author: "Friedrich Nietzsche", image: "/images/Beyond Good and Evil by Friedrich Nietzsche.jpg" },
    { id: 2, title: "Psycho-Cybernetics", author: "Maxwell Maltz", image: "/images/Psycho-Cybernetics .jpeg" },
    { id: 3, title: "Origin", author: "Dan Brown", image: "/images/Origin.jpeg" },
    { id: 4, title: "Angels and Demons", author: "Dan Brown", image: "/images/Dan Brown_ Angels and Demons .jfif" },
    { id: 5, title: "Pale Blue Dot", author: "Carl Sagan", image: "/images/Carl Sagan's Pale blue dot.jpeg" },
    { id: 6, title: "Mindset", author: "Carol Dweck", image: "/images/Mindset.jfif" },
  ];

  return (
    <section className="py-16 bg-[url('/images/x.jpg')] mt-20 -mx-7 bg-cover bg-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Bestsellers</h2>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="py-8"
        >
          {bestsellers.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="font-bold text-lg mb-1 text-gray-700">{book.title}</h3>
                  <p className="text-gray-600 text-sm">by {book.author}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Bestsellers;