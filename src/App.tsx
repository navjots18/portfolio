import React from 'react';
import './App.css'
import  TechStackCarousel from './components/TechStackCarousel';
import SocialLinks from './components/SocialLinks';
import AboutMe from './components/AboutMe';
import ExperienceTree from './components/ExperienceTree';

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-10 min-h-screen bg-gradient-to-br from-white via-gray-100 to-white">
      <div className="col-span-9 flex flex-col items-center sm:px-8 md:px-16 ml-3 mr-3">
        <h1 className="text-5xl font-bold text-gray-800 mb-2 p-6 m-4 bg-white rounded-lg shadow-md font-playfair animate-slide-up">
          Navjot Singh
        </h1>
        <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
          <SocialLinks />
        </div>
        <AboutMe />
        <ExperienceTree />
      </div>
      <div className="col-span-1">
        <TechStackCarousel />
      </div>
    </div>
  );
}


export default App;
