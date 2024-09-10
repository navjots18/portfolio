import React from 'react';
import './App.css'
import  TechStackCarousel from './components/TechStackCarousel';
import SocialLinks from './components/SocialLinks';
import AboutMe from './components/AboutMe';
import ExperienceTree from './components/ExperienceTree';
import ProfileHeader from './components/ProfileHeader';

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-8 min-h-screen w-screen bg-gradient-to-br from-white via-gray-100 to-white overflow-x-hidden">
      <div className="col-span-7 flex flex-col items-center justify-cente mr-2">
        <div className="text-center">
          <ProfileHeader name="Navjot Singh"/>
          <div className="flex justify-center items-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <SocialLinks />
          </div>
          <AboutMe />
        </div>
        <ExperienceTree />
      </div>
      <div className="col-span-1">
        <TechStackCarousel />
      </div>
    </div>
  );
}


export default App;
