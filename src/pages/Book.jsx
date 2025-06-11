import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const BookPage = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f2f0] font-roboto">
      <Navbar></Navbar>
      {/* Breadcrumb Navigation */}
      <nav className="py-4 px-4 sm:px-6 lg:px-8">
        <ol className="flex justify-center space-x-2 text-sm sm:text-base">
          <li className="flex items-center">
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="flex items-center">
            <a href="/books" className="text-gray-600 hover:text-gray-900 transition-colors">Books</a>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="text-gray-900 font-medium">Beyond Good and Evil</li>
        </ol>
      </nav>

      {/* Main Book Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Book Cover and Actions */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center">
            <img 
              src="/images/Beyond Good and Evil by Friedrich Nietzsche.jpg" 
              alt="Beyond Good and Evil" 
              className="w-full max-w-xs rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow"
            />
            <div className="w-full space-y-3">
              <button className="w-full bg-[#b0acaa] hover:bg-white hover:text-[#8a8583] hover:border-[#b0acaa] border text-white font-bold py-3 px-6 rounded-full transition-colors duration-300">
                View
              </button>
              <button className="w-full hover:bg-[#b0acaa] bg-white text-[#8a8583] border-[#b0acaa] py-3 px-6 rounded-full border hover:text-white transition-colors duration-300">
                Add to Cart
              </button>
              <button className="w-full hover:bg-[#b0acaa] bg-white text-[#8a8583] border-[#b0acaa] py-3 px-6 rounded-full border hover:text-white transition-colors duration-300">
                Add to Favorites
              </button>
            </div>
          </div>

          {/* Book Details */}
          <div className="w-full md:w-2/3 lg:w-3/4 bg-white p-7 rounded-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Beyond Good and Evil</h1>
            <h2 className="text-xl text-gray-600 mb-4">by Friedrich Nietzsche</h2>
            
            <div className="flex items-center mb-6">
              <img src="/images/fourH.jpg" alt="4.5 star rating" className="h-8 mr-2" />
              <span className="text-gray-700 font-medium mr-2">4.57</span>
              <a href="#reviews" className="text-[#8a8583] hover:underline">(reviews)</a>
            </div>

            <p className="text-2xl font-bold text-gray-900 mb-6">$4.56</p>

            <p className="text-lg leading-relaxed text-gray-800 mb-4">
              Friedrich Nietzsche's Beyond Good and Evil is translated from the German by R.J. Hollingdale with an introduction by Michael Tanner in Penguin Classics.
              Beyond Good and Evil confirmed Nietzsche's position as the towering European philosopher of his age.
            </p>

            <div className="mb-8">
              <div className={`text-lg leading-relaxed text-gray-800 ${showFullContent ? '' : 'line-clamp-3'}`}>
                <p className="mb-4">
                  The work dramatically rejects the tradition of Western thought with its notions of truth and God, good and evil. Nietzsche demonstrates that the Christian world is steeped in a false piety and infected with a 'slave morality'. With wit and energy, he turns from this critique to a philosophy that celebrates the present and demands that the individual imposes their own 'will to power' upon the world.
                </p>
                <p className="mb-4">
                  This edition includes a commentary on the text by the translator and Michael Tanner's introduction, which explains some of the more abstract passages in Beyond Good and Evil.
                </p>
                <p>
                  Frederich Nietzsche (1844-1900) became the chair of classical philology at Basel University at the age of 24 until his bad health forced him to retire in 1879. He divorced himself from society until his final collapse in 1899 when he became insane. A powerfully original thinker, Nietzsche's influence on subsequent writers, such as George Bernard Shaw, D.H. Lawrence, Thomas Mann and Jean-Paul Sartre, was considerable.
                </p>
                <p>
                  If you enjoyed Beyond Good and Evil you might like Nietzsche's Thus Spoke Zarathustra, also available in Penguin Classics.
                </p>
              </div>
              <button 
                onClick={() => setShowFullContent(!showFullContent)}
                className="text-[#8a8583] font-medium mt-2 focus:outline-none"
              >
                {showFullContent ? 'Read Less' : 'Read More'}
              </button>
            </div>

            {/* Reviews Section */}
            <section id="reviews" className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h3>
              
              <div className="relative">
                <div className="overflow-hidden">
                  <div className="flex space-x-6 pb-4">
                    {/* Review 1 */}
                    <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden p-6">
                      <div className="flex items-center mb-4">
                        <img src="/images/rev1.jfif" alt="Steven Walle" className="w-12 h-12 rounded-full mr-4" />
                        <h4 className="text-xl text-gray-700 font-bold">Steven Walle</h4>
                      </div>
                      <img src="/images/fourH.jpg" alt="4.5 stars" className="h-7 mb-3" />
                      <p className="text-gray-700">I enjoyed the writings of this philosopher.</p>
                    </div>
                    
                    {/* Review 2 */}
                    <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden p-6">
                      <div className="flex items-center mb-4">
                        <img src="/images/rev2.jfif" alt="Tara" className="w-12 h-12 rounded-full mr-4" />
                        <h4 className="text-xl text-gray-700 font-bold">Tara</h4>
                      </div>
                      <img src="/images/fourH.jpg" alt="4.5 stars" className="h-7 mb-3" />
                      <p className="text-gray-700">The author was a strong thinker of the eighteen hundreds.</p>
                    </div>
                    
                    {/* Review 3 */}
                    <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden p-6">
                      <div className="flex items-center mb-4">
                        <img src="/images/rev1.jfif" alt="Luís" className="w-12 h-12 rounded-full mr-4" />
                        <h4 className="text-xl text-gray-700 font-bold">Luís</h4>
                      </div>
                      <img src="/images/fourH.jpg" alt="4.5 stars" className="h-7 mb-3" />
                      <p className="text-gray-700">His philosophy celebrates living in the moment. I recommend this book to all.</p>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Arrows */}
                <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BookPage;