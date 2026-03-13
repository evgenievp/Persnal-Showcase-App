import React from "react";
import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import MainHero from '../components/MainHero';
import MainHeroImage from '../components/MainHeroImage';
import Projects from '../components/Projects';
import Footer from '../components/Footer'; 

const HomePage = () => {
  return (
    <div className="bg-background grid gap-y-16 overflow-hidden">
      <Header />
      <div className="relative bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-background">
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
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