import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BooksPage = () => {
  const books = [
    {
      title: "Anna Karnina",
      author: "by Leo Tolstoy",
      rating: 3.5,
      reviews: "reviews",
      price: "$4.11",
      image: "images/Anna Karenina - Kindle edition by Leo Tolstoy….jfif",
      stars: "images/threeH.jpg"
    },
    {
      title: "Sophie’s World",
      author: "by Jostein Gaarder",
      rating: 4.8,
      reviews: "reviews",
      price: "$3.78",
      image: "images/Sophie’s World.jpg",
      stars: "images/five.jpg"
    },
    {
      title: "Angels and Demons",
      author: "by Dan Brown",
      rating: 4.00,
      reviews: "reviews",
      price: "$3.6",
      image: "images/Dan Brown_ Angels and Demons .jfif",
      stars: "images/four.jpg"
    },
    {
      title: "Mindset",
      author: "by Carol Dweck",
      rating: 4.2,
      reviews: "reviews",
      price: "$2.4",
      image: "images/Mindset.jfif",
      stars: "images/four.jpg",
      border: true
    },
    {
      title: "Beyond Good and Evil",
      author: "by Friedrich Nietzsche",
      rating: 4.57,
      reviews: "reviews",
      price: "$4.56",
      image: "images/Beyond Good and Evil by Friedrich Nietzsche.jpg",
      stars: "images/fourH.jpg"
    },
    {
      title: "A Room of One's Own",
      author: "by Virginia Woolf",
      rating: 3.68,
      reviews: "reviews",
      price: "$3.4",
      image: "images/A Room of One's Own.jpeg",
      stars: "images/threeH.jpg"
    },
    {
      title: "Recent Advances in Mathematics",
      author: "by Mangey Ram",
      rating: 4.57,
      reviews: "reviews",
      price: "$6.32",
      image: "images/Mathematical Engineering, Manufacturing, and Management Scie_ Recent Advances in Mathematics for Engineering (Hardcover).jpg",
      stars: "images/five.jpg"
    },
    {
      title: "The brothers karamazov",
      author: "by Fyodor Dostoevsky",
      rating: 4.67,
      reviews: "reviews",
      price: "$2.66",
      image: "images/brothers karamazov.jpeg",
      stars: "images/five.jpg"
    }
  ];

  return (
    <div className="bg-[#f8f2f0] min-h-screen">
        <Navbar></Navbar>
      {/* Breadcrumb */}
      <nav className="bg-[#f8f2f0] py-4" aria-label="Breadcrumb">
        <ol className="flex justify-center space-x-2">
          <li>
            <a href="/" className="text-[#b0acaa] hover:text-[#8a8583]">Home</a>
          </li>
          <li>
            <span className="text-[#b0acaa]">/</span>
          </li>
          <li className="text-[#8a8583]" aria-current="page">Books</li>
        </ol>
      </nav>

      {/* Books Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book, index) => (
  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-4 flex">
      <img 
        src={book.image} 
        alt={book.title}
        className={`w-24 h-32 object-cover ${book.border ? 'border border-gray-200' : ''}`}
      />
      <div className="ml-4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
          <p className="text-sm text-gray-600">{book.author}</p>
          <div className="flex items-center mt-1">
            <img src={book.stars} alt="Rating" className="h-7" />
            <span className="text-sm text-gray-700 ml-1">{book.rating}</span>
            <a href="#" className="text-xs text-[#b0acaa] ml-1">({book.reviews})</a>
          </div>
          <p className="text-lg font-medium text-gray-900 mt-1">{book.price}</p>
        </div>
      </div>
    </div>
    <hr className="border-t border-gray-200 mx-4" />
    <div className="p-4 flex justify-between">
      <button className="px-3 py-1 bg-[#b0acaa] hover:bg-white hover:text-[#b0acaa] hover:border-[#b0acaa] border text-white rounded text-sm transition-colors duration-300">
        Add to cart
      </button>
      <div className="flex space-x-2">
        <button className="px-3 py-1 border hover:bg-[#b0acaa] bg-white text-[#8a8583] border-[#b0acaa]  hover:text-white  rounded text-sm transition-colors duration-300">
          <a href="./Book">
          View
          </a>
        </button>
        <button className="px-3 py-1 border hover:bg-[#b0acaa] bg-white text-[#8a8583] border-[#b0acaa]  hover:text-white  rounded text-sm transition-colors duration-300">
          Add to favorites
        </button>
      </div>
    </div>
  </div>
))}
        </div>
      </div>

      {/* Pagination */}
      <nav className="flex justify-center py-8">
        <ul className="flex space-x-2">
          <li>
            <button disabled className="px-3 py-1 -mt-3 rounded text-gray-400 cursor-not-allowed">
              Previous
            </button>
          </li>
          <li>
            <a href="./Books" className="px-3 py-1 bg-[#b0acaa] text-white rounded">1</a>
          </li>
          <li>
            <a href="./Books2" className="px-3 py-1 rounded text-[#8a8583] hover:bg-[#f0ecea]">2</a>
          </li>
          <li>
            <a href="/books2" className="px-3 py-1 rounded text-[#8a8583] hover:bg-[#f0ecea]">Next</a>
          </li>
        </ul>
      </nav>

<Footer></Footer>     
    </div>
  );
};

export default BooksPage;