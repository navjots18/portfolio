import React from 'react';
import me from './resources/me.jpg';
interface ProfileHeaderProps {
  name: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name}) => {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-6 m-4 animate-slide-up">
      <img src={me} alt={name} className="w-32 h-32 rounded-full mr-6 object-cover"  />
      <h1 className="text-5xl font-bold text-gray-800 font-playfair">
        {name}
      </h1>
    </div>
  );
};

export default ProfileHeader;
