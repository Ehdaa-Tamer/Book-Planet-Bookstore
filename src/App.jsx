import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Bestsellers from './components/Bestsellers';
import FeaturedProduct from './components/FeaturedProduct';
import NewReleases from './components/NewReleases';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#f8f2f0] min-h-screen">
      <Navbar />
      <main>
        <HeroCarousel />
        <Bestsellers />
        <FeaturedProduct />
        <NewReleases />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;