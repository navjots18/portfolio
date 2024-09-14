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
    description: "Collaborated with the Backend Delights Insight team to enhance customer metrics and system performance. Developed and deployed a unified usage metrics service, reducing data processing latency by 40% through improved caching and optimized Kafka job performance. Engineered systems for efficient data synchronization, managing high transaction volumes and ensuring real-time data availability."
  },
  {
    company: "Practice By Numbers",
    role: "Software Engineer",
    period: "Feb 2022 - Jul 2023",
    description: "Worked with the backend team to develop key features for a standalone Patient Portal service, including chat enhancements and file-sharing with Amazon S3, improving patient data management and authentication functionalities."
  },
  {
    company: "Innovaccer",
    role: "Software Developent Engineer - 1",
    period: "Feb 2022- Feb 2023",
    description: "Collaborated with the backend team to develop key features and a standalone Patient Portal service, improving user experience with enhanced chat functionality and file-sharing. Also built the Patient Portal for managing patient data and developed the authentication system, including sign-up, login, and password recovery."
  }
 
  
  
];
const ExperienceTree: React.FC = () => {
    return (
      <div className="ml-2 mt-8 p-2 bg-white rounded-lg shadow-md max-w-2xl animate-slide-up">
        <h2 className="text-2xl font-bold mb-6 font-playfair">My Experience</h2>
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
