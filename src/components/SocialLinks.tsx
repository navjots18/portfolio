import React from 'react';
import { Icon } from '@iconify/react';

const SocialLinks: React.FC = () => {
  return (
    
    <div className="flex space-x-4 animate-slide-up">
      <a href="https://www.linkedin.com/in/navjots20/" target="_blank" rel="noopener noreferrer">
        <Icon icon="mdi:linkedin" className="text-3xl text-black-600 hover:text-blue-800" />
      </a>
      <a href="https://github.com/navjots18" target="_blank" rel="noopener noreferrer">
        <Icon icon="mdi:github" className="text-3xl text-gray-700 hover:text-green-900" />
      </a>
    </div>
  );
};

export default SocialLinks;