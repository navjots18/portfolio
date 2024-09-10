import React from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const techStacks = [
  { name: 'React', icon: 'simple-icons:react' },
  { name: 'TypeScript', icon: 'simple-icons:typescript' },
  { name: 'Python', icon: 'simple-icons:python' },
  { name: 'JavaScript', icon: 'simple-icons:javascript' },
  { name: 'HTML5', icon: 'simple-icons:html5' },
  { name: 'CSS3', icon: 'simple-icons:css3' },
  { name: 'Git', icon: 'simple-icons:git' },
  { name: 'Docker', icon: 'simple-icons:docker' },
  { name: 'MongoDB', icon: 'simple-icons:mongodb' },
  { name: 'Java', icon: 'simple-icons:openjdk' },
  { name: 'Spring', icon: 'simple-icons:spring' },
  { name: 'Kubernetes', icon: 'simple-icons:kubernetes' },
  { name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
  { name: 'C#', icon: 'simple-icons:csharp' },
  { name: '.NET', icon: 'simple-icons:dotnet' },
];

const TechStackCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 15,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="h-full">
      <Slider {...settings}>
        {techStacks.map((tech, index) => (
         <div key={index} className="flex items-center py-4">
         <Icon icon={tech.icon} className="text-4xl text-black fill-current mr-2" />
         <span className="text-sm hidden md:inline">{tech.name}</span>
       </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechStackCarousel;