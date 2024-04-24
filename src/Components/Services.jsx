import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faUniversity, faLink, faServer } from '@fortawesome/free-solid-svg-icons';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
        <div className="mx-auto mb-7 inline-block">
          <FontAwesomeIcon icon={icon} className="text-6xl text-purple-600" />
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">{title}</h3>
          <p className="text-base font-medium text-body-color">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="p-8">
    <h3 className="text-4xl font-bold mb-8">Our Services</h3>
    <div className="-mx-4 flex flex-wrap p-8">
      <FeatureCard
        icon={faLaptop}
        title="Consultation"
        description="We are a full service consultation and business development group – we build strategies and systems."
      />
      <FeatureCard
        icon={faUniversity}
        title="Event Production"
        description="Our team of well-trained and experienced international producers always deliver highly well-researched topics that addresses the real market"
      />
      <FeatureCard
        icon={faServer}
        title="Team Building"
        description="Strong, cohesive teams are the backbone of successful organizations. Our team-building experiences are designed to foster collaboration…"
      />
      <FeatureCard
        icon={faLink}
        title="Training Programs"
        description="We offer a diverse range of training programs designed to enhance the skills and knowledge of your workforce."
      />
      <FeatureCard
        icon={faLink}
        title="Tours and Travel"
        description="Leveraging on both an international and local portfolio of tours and travel agents and solutions…."
      />
      <FeatureCard
        icon={faLink}
        title="Conferences and Summits"
        description="Through a substantial presence in each industry and country across the continents, our conferences and summits leverage the latest….."
      />
    </div>
    </div>
  );
};

export default Services;
