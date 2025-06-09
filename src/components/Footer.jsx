import React from 'react'

export default function Footer() {
  return (
     <footer className="bg-white border-t border-gray-200 py-8 -mx-7">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Info</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#b0acaa]">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#b0acaa]">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#b0acaa]">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#b0acaa]">Shipping</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#b0acaa]">Help center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#b0acaa]">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#">
                  <img src="images/icons8-facebook-48.png" alt="Facebook" className="h-8 w-8" />
                </a>
                <a href="#">
                  <img src="images/icons8-instagram-48.png" alt="Instagram" className="h-8 w-8" />
                </a>
                <a href="#">
                  <img src="images/icons8-twitter-squared-48.png" alt="Twitter" className="h-8 w-8" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-3">Stay up-to-date</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 border bg-transparent border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-[#b0acaa] w-full"
                />
                <button className="px-4 py-2 bg-[#b0acaa] text-white rounded-r hover:bg-[#8a8583] transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
