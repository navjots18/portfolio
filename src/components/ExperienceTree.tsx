import React from 'react';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    company: "Hubspot",
    role: "SWE intern",
    period: "Jun 2024 - Present",
    description: "Worked as an intern on the HubSpot CMS team, contributing to the development of HubSpot's content management system. Collaborated with cross-functional teams to deliver high-quality features and enhancements."
  },
  {
    company: "Practice By Numbers",
    role: "Software Engineer",
    period: "Feb 2022 - Jul 2023",
    description: "Developed and maintained multiple web applications using React and Node.js.sadsadsada"
  },
  {
    company: "Innovaccer",
    role: "Software Developent Engineer - 1",
    period: "Feb 2022- Feb 2023",
    description: "Assisted in the development of company's main product and learned various technologies."
  }
 
  
  
];
const ExperienceTree: React.FC = () => {
    return (
      <div className="mt-8 p-2 bg-white rounded-lg shadow-md max-w-2xl animate-slide-up">
        <h2 className="text-2xl font-bold mb-6">My Experience</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex">
              <div className="flex flex-col items-center mr-4 relative">
                <div className={`w-3 h-3 rounded-full border-2 border-black ${index === 0 ? 'bg-black' : 'bg-white'} z-10`}></div>
                {index !== 0 && (
                  <div className="w-1 bg-black absolute top-0 bottom-4 left-1/2 transform -translate-x-1/2"></div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{exp.company}</h3>
                <p className="text-gray-600 text-sm">{exp.role} | {exp.period}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ExperienceTree;
