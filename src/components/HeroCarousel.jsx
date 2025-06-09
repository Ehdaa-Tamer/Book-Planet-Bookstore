import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroCarousel = () => {
  return (
    <section className="relative -mx-7">
      <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        className="relative"
      >
        <div className="relative h-96 md:h-[500px]">
          <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
          <img 
            src="/images/carousel_bg1.jpg" 
            alt="Architects of Imagination" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Architects of Imagination</h2>
            <p className="text-xl md:text-2xl mb-8 text-center">Build your own book planet</p>
            <a href="/books" className="bg-[#b0acaa] hover:bg-white hover:text-[#b0acaa] hover:border-[#b0acaa] border text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Shop Now
            </a>
          </div>
        </div>
        
        <div className="relative h-96 md:h-[500px]">
          <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
          <img 
            src="/images/carousel_bg2.jpg" 
            alt="20% Off Sale" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 z-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">20% Off</h2>
            <p className="text-xl md:text-2xl text-center">Thousands Of Hardcover Books</p>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;