import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const QuotesPage = () => {
  const quotes = [
    {
      text: "Whatever is done for love always occurs beyond good and evil.",
      author: "Friedrich Nietzsche",
      book: "Beyond Good and Evil",
    },
    {
      text: "You will act like the sort of person you conceive yourself to be.",
      author: "Maxwell Maltz",
      book: "Psycho-Cybernetics",
    },
    {
      text: "Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
      author: "Virginia Woolf",
      book: "A Room of One's Own",
    },
    {
      text: "The immense distances to the stars and the galaxies mean that we see everything in space in the past, some as they were before the Earth came to be. Telescopes are time machines.",
      author: "Carl Sagan",
      book: "Pale Blue Dot",
    },
    {
      text: "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
      author: "Fyodor Dostoyevsky",
      book: "The Brothers Karamazov",
    },
    {
      text: "... the only thing we require to be good philosophers is the faculty of wonder...",
      author: "Jostein Gaarder",
      book: "Sophie's World",
    },
    {
      text: "no matter what your ability is, effort is what ignites that ability and turns it into accomplishment.",
      author: "Carol S. Dweck",
      book: "Mindset",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f2f0]">
      {/* Navigation would go here */}
<Navbar></Navbar>
      {/* Breadcrumb */}
      <nav className="py-4">
        <ol className="flex justify-center space-x-2">
          <li>
            <a href="/" className="text-[#b0acaa] hover:text-gray-700">
              Home
            </a>
          </li>
          <li className="text-[#b0acaa]">/</li>
          <li className="text-gray-700" aria-current="page">
            Quotes
          </li>
        </ol>
      </nav>

      {/* Quotes Container */}
      <div className="w-4/5 mx-auto my-8 space-y-6">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <blockquote className="text-xl italic text-gray-800 mb-4">
              "{quote.text}"
            </blockquote>
            <p className="text-right text-gray-600 mb-4">
              ― {quote.author}, {quote.book}
            </p>
            <button className="px-4 py-2 bg-[#b0acaa] text-white rounded hover:bg-gray-600 transition-colors">
              View Book
            </button>
          </div>
        ))}
      </div>

     <Footer></Footer>
    </div>
  );
};

export default QuotesPage;