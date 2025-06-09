import React from 'react';

const FeaturedProduct = () => {
  return (
    <section className="py-16 mt-24">
      <div className="container mx-auto flex justify-center px-4">
        <div className="flex flex-col md:flex-row items-center max-w-6xl justify-center bg-[#fbf6f5] rounded-xl overflow-hidden shadow-lg">
          <div className="md:w-1/3 p-6 md:p-10">
            <img 
              src="/images/inkpen.png" 
              alt="Invisible Ink Pen" 
              className="w-full max-w-xs mx-auto object-contain h-64"
            />
          </div>
          <div className="md:w-2/3 p-6 md:p-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Invisible Ink Pen</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              An invisible ink pen lets you write with invisible ink that becomes visible with heat, lemon juice, or UV light. 
              It offers various uses, including secret communication and playful activities, but responsible and ethical 
              usage is important.
            </p>
            <button className="bg-[#b0acaa] hover:bg-white hover:text-[#b0acaa] hover:border-[#b0acaa] border text-white font-bold py-3 px-8 rounded-full transition duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;