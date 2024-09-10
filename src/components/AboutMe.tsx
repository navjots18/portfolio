import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="mt-8 p-5 bg-white rounded-lg shadow-md max-w-lg animate-slide-up">
      <h2 className="text-2xl font-bold mb-4 font-playfair">About Me</h2>
      <p className="text-gray-700 ">
      I’m a passionate software engineer with a strong focus on open source and full-stack development, specializing in backend systems. With both a Bachelor’s and Master’s degree in Computer Science, I am dedicated to scaling systems for large-scale applications. Outside of work, I enjoy gaming, hitting the gym, and traveling.
      </p>
    </div>
  );
};

export default AboutMe;
