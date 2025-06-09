import React, { useState } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewReleases = () => {
  const [expandedBook, setExpandedBook] = useState(null);
  
  const newReleases = [
    {
      id: 1,
      title: "A Room of One's Own",
      author: "Virginia Woolf",
      image: "/images/A Room of One's Own.jpeg",
      rating: 3.68,
      description: "A Room of One's Own is an extended essay by Virginia Woolf. First published on the 24th of October, 1929, the essay was based on a series of lectures she gave at Newnham College and Girton College, two women's colleges at Cambridge University.",
      fullDescription: "While this extended essay in fact employs a fictional narrator and narrative to explore women both as writers and characters in fiction, the manuscript for the delivery of the series of lectures, titled Women and Fiction, and hence the essay, are considered nonfiction. The essay is seen as a feminist text, and is noted in its argument for both a literal and figural space for women writers within a literary tradition dominated by patriarchy."
    },
    {
      id: 2,
      title: "Recent Advances in Mathematics",
      author: "Mangey Ram",
      image: "/images/Mathematical Engineering, Manufacturing, and Management Scie_ Recent Advances in Mathematics for Engineering (Hardcover).jpg",
      rating: 4.57,
      description: "In recent years, mathematics has experienced amazing growth in the engineering sciences. Mathematics forms the common foundation of all engineering disciplines.",
      fullDescription: "It offers chapters that develop the applications of mathematics in engineering sciences, conveys the innovative research ideas, offers real-world utility of mathematics, and has a significance in the life of academics, practitioners, researchers, and industry leaders."
    },
    {
      id: 3,
      title: "Sophie's World",
      author: "Jostein Gaarder",
      image: "/images/Sophie’s World.jpg",
      rating: 4.8,
      description: "One day fourteen-year-old Sophie Amundsen comes home from school to find in her mailbox two notes, with one question on each: 'Who are you?' and 'Where does the world come from?'",
      fullDescription: "Through those letters, she enrolls in a kind of correspondence course, covering Socrates to Sartre, with a mysterious philosopher, while receiving letters addressed to another girl. Who is Hilde? And why does her mail keep turning up? To unravel this riddle, Sophie must use the philosophy she is learning—but the truth turns out to be far more complicated than she could have imagined."
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick}
        className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button 
        onClick={onClick}
        className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
      >
        <FaChevronRight className="text-gray-700" />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-[#f8f2f0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">New Releases</h2>
        
        <div className="relative max-w-6xl mx-auto">
          <Slider {...settings}>
            {newReleases.map((book) => (
              <div key={book.id} className="px-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col md:flex-row h-full">
                  <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
                    <img 
                      src={book.image} 
                      alt={book.title} 
                      className="w-full h-64 md:h-full object-contain mx-auto p-4"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col md:w-2/3 lg:w-3/4">
                    <div>
                      <h3 className="text-xl text-gray-700 font-bold mb-2">{book.title}</h3>
                      <p className="text-gray-600 mb-4">by {book.author}</p>
                      
                      <div className="flex items-center mb-4">
                        <div className="flex mr-2">
                          {renderStars(book.rating)}
                        </div>
                        <span className="text-gray-700">{book.rating}</span>
                        <a href="#" className="ml-2 text-sm text-[#b0acaa] hover:underline">(reviews)</a>
                      </div>
                      
                      <p className="text-gray-700 mb-4">
                        {expandedBook === book.id ? book.fullDescription : book.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <button 
                        onClick={() => setExpandedBook(expandedBook === book.id ? null : book.id)}
                        className="text-[#b0acaa] ml-3 hover:text-gray-700 text-sm font-medium mb-4"
                      >
                        {expandedBook === book.id ? 'Read Less' : 'Read More'}
                      </button>
                      
                      <div className="flex flex-wrap gap-2">
                        <button className="bg-[#b0acaa] hover:bg-white hover:text-[#b0acaa] hover:border-[#b0acaa] border text-white py-2 px-4 rounded-full text-sm transition duration-300">
                          Add to Cart
                        </button>
                        <button className="border border-[#b0acaa] text-[#b0acaa] hover:bg-[#b0acaa] hover:text-white py-2 px-4 rounded-full text-sm transition duration-300">
                          Add to Favorites
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewReleases;