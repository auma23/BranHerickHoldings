
import React from 'react';
import PropTypes from 'prop-types';
import consult from '../assets/consultation.jpg'
import event from '../assets/event.jpg'
import team from '../assets/team.jpg'
import train from '../assets/training.jpg'
import travel from '../assets/travel.jpg'
import conference from '../assets/conference.jpg'



const FeatureCard = ({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt={title} className="w-full h-auto transition-all duration-300 ease-in-out transform hover:scale-105" />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300 ease-in-out">
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

FeatureCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Services = () => {
  const servicesData = [
    
          { imageSrc: consult, title: "Consultation", description: "We are a full service consultation and business development group – we build strategies and systems." },
          { imageSrc: event, title: "Event Production", description: "Our team of well-trained and experienced international producers always deliver highly well-researched topics that addresses the real market." },
          { imageSrc: team, title: "Team Building", description: "Our team of well-trained and experienced international producers always deliver highly well-researched topics that addresses the real market." },
          { imageSrc: train, title: "Training Programs", description: "We offer a diverse range of training programs designed to enhance the skills and knowledge of your workforce." },
          { imageSrc: travel, title: "Tours and Travel", description: "Leveraging on both an international and local portfolio of tours and travel agents and solutions." },
          { imageSrc: conference, title: "Conferences and Summits", description: "Through a substantial presence in each industry and country across the continents, our conferences and summits leverage the latest." },
      
  ];

  return (
    <div className="p-8" id='services'>
      <h3 className="text-4xl font-bold mb-8 text-harvestGold">Our Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <FeatureCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;



