import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FormPage = () => {
  return (
    <div className="min-h-screen bg-[#f8f2f0]">
      {/* Navigation would go here */}
<Navbar></Navbar>
      {/* Form Section */}
      <section id="contact" className="py-8">
        <div className="container mx-auto max-w-4xl bg-white bg-opacity-60 rounded-lg p-6">
          <div className="flex justify-center my-3 pt-12 pb-8">
            <div className="w-full md:w-1/2">
              <form className="space-y-4 ">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#b0acaa] bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">
                    Email address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#b0acaa] bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-gray-700 mb-1">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#b0acaa] bg-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="number" className="block text-gray-700 mb-1">
                    Phone number:
                  </label>
                  <input
                    type="text"
                    id="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-[#b0acaa] bg-transparent"
                  />
                </div>

               

                <p id="msg" className="text-sm text-gray-600"></p>

                <div className="my-6 text-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#b0acaa] text-white rounded hover:bg-[#8a8583] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    <Footer></Footer>
    </div>
  );
};

export default FormPage;