import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Projects from '../components/Projects';

const HomePage = () => {
  return (
    <div className="bg-background grid gap-y-10 overflow-hidden sm:gap-y-14 lg:gap-y-16">
      <Header />
      <div className="relative bg-background pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-8 sm:px-6 md:gap-10 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2 lg:px-8">
          <div className="relative z-10 bg-background">
            <MainHero />
          </div>
          <MainHeroImage />
        </div>
      </div>
      <Canvas />
      <Projects />
      <About />
      <Footer />
      <Analytics />
    </div>
  );
};

export default HomePage;
