import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Books2 = () => {
  const books = [
  {
    title: "The Critique of Pure Reason",
    author: "by Immanuel Kant",
    rating: 3.5,
    reviews: "reviews",
    price: "$4.11",
    image: "images/The Critique of Pure Reason by Immanuel Kant - BookBub.jfif",
    stars: "images/threeH.jpg"
  },
  {
    title: "A Brief History of Time",
    author: "by Stephen Hawking",
    rating: 4.8,
    reviews: "reviews",
    price: "$3.78",
    image: "images/A Brief History of Time.jfif",
    stars: "images/five.jpg"
  },
  {
    title: "Pride and Prejudice",
    author: "by Jane Austen",
    rating: 4.00,
    reviews: "reviews",
    price: "$3.6",
    image: "images/Pride and Prejudice by Jane Austen.jfif",
    stars: "images/four.jpg"
  },
  {
    title: "Pale blue dot",
    author: "by Carl Sagan",
    rating: 4.2,
    reviews: "reviews",
    price: "$2.4",
    image: "images/Carl Sagan's Pale blue dot.jpeg",
    stars: "images/four.jpg"
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
          View
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
            <button disabled className="px-3 py-1 -mt-3 rounded text-[#8a8583] hover:bg-[#f0ecea]">
              Previous
            </button>
          </li>
          <li>
            <a href="./Books" className="px-3 py-1 rounded text-[#8a8583] hover:bg-[#f0ecea]">1</a>
          </li>
          <li>
            <a href="./Books2" className="px-3 py-1 bg-[#b0acaa] text-white rounded">2</a>
          </li>
          <li>
            <a href="/books2" className="px-3 py-1 rounded text-gray-400 cursor-not-allowed">Next</a>
          </li>
        </ul>
      </nav>

<Footer></Footer>     
    </div>
  );
};

export default Books2;