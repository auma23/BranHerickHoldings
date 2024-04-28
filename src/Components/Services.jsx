import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faUniversity, faUsers, faGraduationCap, faPlane, faGlobe, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FeatureCard = ({ icon, title, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false); 

  const maxDescriptionLength = 3; 
  const shortDescription = description.split(' ').slice(0, maxDescriptionLength).join(' '); 

  const handleReadMore = () => {
    setShowFullDescription(!showFullDescription); 
  };

  FeatureCard.propTypes = {
    icon: PropTypes.object.isRequired, 
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3" id='services'>
      <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
        <div className="mx-auto mb-7 inline-block">
          <FontAwesomeIcon icon={icon} className="text-6xl text-harvestGold" />
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold text-licorice sm:text-2xl lg:text-xl xl:text-2xl">{title}</h3>
          <p className="text-base font-medium text-gray-400">
            {showFullDescription ? description : shortDescription} { // Conditionally render full or short description
              !showFullDescription && description.length > maxDescriptionLength && ( // Show "Read More" if description is truncated
                <button className="text-xs text-harvestGold font-medium px-2 py-1 rounded hover:bg-licorice hover:text-cream mt-2 transition-all duration-300 ease-in-out" onClick={handleReadMore}>
                  Read More
                </button>
              )}
          </p>
        </div>
      </div>
    </div>
  );
};


const Services = () => {
  const [displayedServices, setDisplayedServices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const servicesData = [ 
    { icon: faLaptop, title: "Consultation", description: "We are a full service consultation and business development group – we build strategies and systems...." },
    { icon: faUniversity, title: "Event Production", description: "Our team of well-trained and experienced international producers always deliver highly well-researched topics that addresses the real market..." },
    { icon: faUsers, title: "Team Building", description: "Our team of well-trained and experienced international producers always deliver highly well-researched topics that addresses the real market..." },
    { icon: faGraduationCap, title: "Training Programs", description: "We offer a diverse range of training programs designed to enhance the skills and knowledge of your workforce...." },
    { icon: faPlane, title: "Tours and Travel", description: "Leveraging on both an international and local portfolio of tours and travel agents and solutions..." },
    { icon: faGlobe, title: "Conferences and Summits", description: "Through a substantial presence in each industry and country across the continents, our conferences and summits leverage the latest..." },
  ];

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % servicesData.length;
    const nextDisplayedServices = servicesData.slice(nextIndex, nextIndex + 3);
    setDisplayedServices(nextDisplayedServices);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + servicesData.length) % servicesData.length;
    const prevDisplayedServices = servicesData.slice(prevIndex, prevIndex + 3);
    setDisplayedServices(prevDisplayedServices);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    setDisplayedServices(servicesData.slice(0, 3)); 
  }, []);

  return (
    <div className="p-8">
      <h3 className="text-4xl font-bold mb-8 text-harvestGold">Our Services</h3>
      <div className="flex flex-wrap justify-between">
        <button
          className="p-2 rounded-full hover:bg-licorice hover:text-harvestGold focus:outline-none disabled:opacity-50"
          disabled={currentIndex === 0}
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="-mx-4 flex flex-wrap p-8">
          {displayedServices.map((service, index) => (
            <FeatureCard key={index} {...service} />
          ))}
        </div>
        <button
          className="p-2 rounded-full hover:bg-licorice hover:text-harvestGold focus:outline-none disabled:opacity-50"
          disabled={currentIndex === servicesData.length - 3}
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Services;

